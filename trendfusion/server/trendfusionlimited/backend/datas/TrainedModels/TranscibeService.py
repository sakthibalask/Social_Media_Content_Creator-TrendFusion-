import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential, load_model
from tensorflow.keras.layers import Embedding, LSTM, Dense, Dropout
from sklearn.model_selection import train_test_split

# Step 1: Data Preprocessing
# Load the dataset
dataset = pd.read_json("hf://datasets/abross/youtube-transcriptions/youtube-transcriptions.jsonl", lines=True)
dataset.to_csv("youtube_scripts.csv", index=False)
df = pd.read_csv('youtube_scripts.csv')

# Assume 'text' is the column with the script data
df['text'] = df['text'].astype(str)
df['text'] = df['text'].fillna('')

scripts = df['text'].values
tokenizer = Tokenizer()
tokenizer.fit_on_texts(scripts)

# Tokenization
tokenizer = Tokenizer()
tokenizer.fit_on_texts(scripts)
total_words = len(tokenizer.word_index) + 1

# Convert texts to sequences
input_sequences = []
for script in scripts:
    token_list = tokenizer.texts_to_sequences([script])[0]
    for i in range(1, len(token_list)):
        n_gram_sequence = token_list[:i+1]
        input_sequences.append(n_gram_sequence)

# Padding sequences
max_sequence_len = max([len(x) for x in input_sequences])
input_sequences = np.array(pad_sequences(input_sequences, maxlen=max_sequence_len, padding='pre'))

# Split data into input and label
X, y = input_sequences[:, :-1], input_sequences[:, -1]
y = tf.keras.utils.to_categorical(y, num_classes=total_words)

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Step 2: Model Building
# Uncomment this block only if training for the first time
# model = Sequential()
# model.add(Embedding(total_words, 100, input_length=max_sequence_len-1))
# model.add(LSTM(150, return_sequences=True))
# model.add(Dropout(0.2))
# model.add(LSTM(100))
# model.add(Dense(total_words, activation='softmax'))

# model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
# model.summary()

# Step 3: Training
# Uncomment this block only if training for the first time
# history = model.fit(X_train, y_train, epochs=50, validation_data=(X_test, y_test), verbose=1)
# model.save('scriptgenerator_enhanced.keras')

# Step 4: Load the saved model
model = load_model('scriptgenerator_enhanced.keras')

# Step 5: Evaluation
evaluation = model.evaluate(X_test, y_test)
print(f"Test Loss: {evaluation[0]}, Test Accuracy: {evaluation[1]}")

# Step 6: Prediction (Script Generation)
def generate_script(topic, seed_text, next_words=50):
    # Combine the topic with the initial seed text
    seed_text = topic + ": " + seed_text
    
    for _ in range(next_words):
        token_list = tokenizer.texts_to_sequences([seed_text])[0]
        token_list = pad_sequences([token_list], maxlen=max_sequence_len-1, padding='pre')
        predicted = np.argmax(model.predict(token_list, verbose=0), axis=-1)
        output_word = tokenizer.index_word.get(predicted[0], '')
        seed_text += " " + output_word
    return seed_text

# Example usage
topic = "DevOps"
seed_text = "In this video, we are going to discuss"
generated_script = generate_script(topic, seed_text, next_words=1000)
f = open('demoscript.txt','a')
f.write(str(generated_script))
f.close()


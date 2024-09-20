import React from "react";
import '../../assets/css/PaymentPage.css';
import '../../assets/css/colors/colors.css';

const Payment = ()=>{
    return(
        <>
            <section className="payment-section">
                <div className="payment-container">
                    <div className="payment-wrapper">
                        <div className="payment-left">
                            <div className="payment-header">
                                <div className="payment-header-icon"><i class="ri-receipt-line"></i></div>
                                <div className="payment-header-title">Order Summary</div>
                                <p className="payment-header-descp">Check your order details below.</p>
                            </div>
                            <div className="payment-content">
                                <div className="payment-body">
                                    <div className="payment-plan">
                                    <div className="payment-plan-type"><i class="ri-flashlight-fill"></i></div>
                                    <div className="payment-plan-info">
                                        <div className="payment-plan-info-name">Subscribe to Starter Monthly</div>
                                        <div className="payment-plan-info-price">₹ 1200 per month</div>
                                    </div>
                                    <a href="#" className="payment-plan-change">Change</a>
                                    </div>
                                    <div className="payment-summary">
                                    <div className="payment-summary-item">
                                        <div className="payment-summary-name">Subtotal</div>
                                        <div className="payment-summary-item-price">₹ 1200.00</div>
                                    </div>
                                    <div className="payment-summary-item">
                                        <div className="payment-summary-name">Tax <i class="ri-information-line"></i></div>
                                        <div className="payment-summary-item-price payment-tax">₹ 0.00</div>
                                    </div>
                                    <div className="payment-summary-item-divider"></div>
                                    <div className="payment-summary-item payment-summary-item-total">
                                        <div className="payment-summary-name">Total</div>
                                        <div className="payment-summary-item-price">₹ 1200.00</div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="payment-right">
                            <form action= "" className="payment-form">
                                <h1 className="payment-title">Pay with card</h1>
                                <div className="payment-form-group">
                                    <input type="text" className="payment-form-control" id="email" placeholder=""/>
                                    <label className="payment-form-label payment-form-label-required" htmlFor="email">Email</label>
                                </div>
                                <div className="payment-form-group">
                                    <input type="text" className="payment-form-control" id="cardnumber" placeholder="" maxLength={12}/>
                                    <label className="payment-form-label payment-form-label-required" htmlFor="cardnumber">Card Number</label>
                                </div>
                                <div className="payment-form-group-flex">
                                    <div className="payment-form-group">
                                        <input type="date" className="payment-form-control" id="date" placeholder=""/>
                                        <label className="payment-form-label payment-form-label-required" htmlFor="date">MM/YYYY</label>
                                    </div>
                                    <div className="payment-form-group">
                                        <input type="password" className="payment-form-control" id="ccv" placeholder="" maxLength={3}/>
                                        <label className="payment-form-label payment-form-label-required" htmlFor="cvc">CVC</label>
                                    </div>
                                </div>
                                <div className="payment-form-group">
                                    <input type="text" className="payment-form-control" id="address" placeholder="" maxLength={12}/>
                                    <label className="payment-form-label" htmlFor="address">Billing Address</label>
                                </div>
                                <div className="payment-form-group payment-checkbox">
                                    <input type="checkbox" className="payment-form-control-checkbox" id="agree-pay"/>
                                    <label htmlFor="agree-pay" className="payment-form-label payment-descp">Securely save my information for 1-click checkout</label>
                                </div>
                                <button className="payment-form-button" disabled>Subscribe</button>
                                <div className="payment-form-group payment-text">
                                    <p className="payment-descp">By confirming your subscription, you allow Trendfusion to charge you for future payments in accordance with their terms. You can always cancel your subscription.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Payment;
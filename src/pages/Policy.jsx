import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Style from '../pages/Policy.module.css'

function Policy () {
    return (
        <>
        <Navbar />
            <main>
                <section className={Style.policySections}>
                    
                    <h2 className={Style.heading}>Privacy Policy</h2>
                    <p className={Style.text}>
                        At Sokari, we are committed to protecting your privacy and ensuring the security of your personal information. Our Privacy Policy outlines how we collect, use, and safeguard your data when you interact with our website.
                    </p>
                    <h3 className={Style.subHeading}>Information We Collect</h3>
                    <p className={Style.text}>
                        We may collect personal information such as your name, email address, shipping address, and payment details when you place an order or create an account on our website.
                    </p>
                    <h3 className={Style.subHeading}>How We Use Your Information</h3>
                    <p className={Style.text}> 
                       We use your information to process orders, improve our products and services, communicate with you about promotions and updates, and personalize your shopping experience.
                    </p>
                    <h3 className={Style.subHeading}>Data Security</h3>
                    <p className={Style.text}>
                        We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.
                    </p>
                    <h3 className={Style.subHeading}>Third-Party Services</h3>
                    <p className={Style.text}>
                         We may use third-party services such as payment processors and shipping providers to fulfill orders. These services have their own privacy policies, and we encourage you to review them.
                    </p>
                    <h3 className={Style.subHeading}>Cookies</h3>
                    <p className={Style.text}>
                        We use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can adjust your browser settings to block cookies or receive alerts when cookies are being used.
                    </p>
                </section>

                <section className={Style.policySections}>

                    <h2 className={Style.heading}>Delivery Policy</h2>
                    <h3 className={Style.subHeading}>Shipping Methods</h3>
                    <p className={Style.text}>
                        We offer various shipping options, including standard, expedited, and international shipping. Shipping costs and delivery times may vary depending on your location and chosen shipping method.
                    </p>

                    <h3 className={Style.subHeading}>Order Processing</h3>
                    <p className={Style.text}>
                        Orders are typically processed within 1-3 business days. You will receive a confirmation email with tracking information once your order has been shipped.
                    </p>

                    <h3 className={Style.subHeading}>Delivery Times</h3>
                    <p className={Style.text}>
                        Estimated delivery times are provided at checkout and may vary based on factors such as shipping destination, carrier delays, and customs processing.
                    </p>

                    <h3 className={Style.subHeading}>Shipping Charges</h3>
                    <p className={Style.text}>
                        Shipping charges are calculated based on the weight of your order, shipping destination, and chosen shipping method. Additional customs duties and taxes may apply for international orders.
                    </p>

                    <h3 className={Style.subHeading}>Tracking Your Order</h3>
                    <p className={Style.text}>
                        You can track the status of your order using the tracking number provided in your shipping confirmation email or by logging into your account on our website.
                    </p>
                </section>
                
                <section className={Style.policySections}>
                    <h2 className={Style.heading}>Return/Exchange Policy</h2>
                    <h3 className={Style.subHeading}>Returns</h3>
                    <p className={Style.text}>
                        We accept returns for eligible items within 30 days of purchase. To be eligible for a return, items must be unused, in their original condition, and with tags attached. Certain products such as intimate apparel and personalized items may not be eligible for return.
                    </p>

                    <h3 className={Style.subHeading}>Exchanges</h3>
                    <p className={Style.text}>
                       If you would like to exchange an item for a different size, color, or style, please contact our customer service team to arrange for an exchange. Exchanges are subject to availability.
                    </p>

                    <h3 className={Style.subHeading}>Return Process</h3>
                    <p className={Style.text}>
                       To initiate a return, please contact us with your order number and reason for return. Once your return request is approved, you will receive instructions on how to return the item(s) to us.
                    </p>

                    <h3 className={Style.subHeading}>Refunds</h3>
                    <p className={Style.text}>
                       Refunds will be issued to the original payment method within 5-7 business days after we receive and inspect the returned item(s). Shipping charges are non-refundable.
                    </p>

                    <h3 className={Style.subHeading}>Damaged or Defective Items</h3>
                    <p className={Style.text}>
                        If you receive a damaged or defective item, please contact us immediately for assistance. We will arrange for a replacement or refund as needed.
                    </p>
                </section>
                   
                <section className={Style.policySections}>
                     <h2 className={Style.heading}>Terms and Conditions</h2>
                     <h3 className={Style.subHeading}>Acceptance of Terms</h3>
                     <p className={Style.text}>
                         By accessing or using our website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our website.
                     </p>

                     <h3 className={Style.subHeading}>Intellectual Property</h3>
                     <p className={Style.text}>
                        All content on this website, including text, images, logos, and trademarks, is the property of Sokari and is protected by copyright and other intellectual property laws.
                     </p>

                     <h3 className={Style.subHeading}>Use of Website</h3>
                     <p className={Style.text}>
                        You may use our website for lawful purposes only. You may not use our website to transmit any harmful, offensive, or illegal content.
                     </p>

                     <h3 className={Style.subHeading}>Account Registration</h3>
                     <p className={Style.text}>
                       To access certain features of our website, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account.
                     </p>

                     <h3 className={Style.subHeading}>Limitation of Liability</h3>
                     <p className={Style.text}>
                        Sokari shall not be liable for any direct, indirect, incidental, special, or   consequential damages arising out of or in any way connected with your use of our website or products.
                     </p>

                     <h3 className={Style.subHeading}>Governing Law</h3>
                     <p className={Style.text}>
                        These Terms and Conditions are governed by the laws of [your jurisdiction]. Any disputes arising out of or relating to these terms shall be resolved in the courts of [your jurisdiction].
                     </p>
                </section>
            </main>
        <Footer />
        </>
    )
}

export default Policy
import React from 'react';

import Header from '../../components/Header';

import phone from '../../assets/images/icons/phone-icon.png';
import email from '../../assets/images/icons/email-icon.png';
import location from '../../assets/images/icons/location-icon.png';

import './style.css';

const FaqPage = () => {
  return (
    <>
      <Header />
      <div id='contact' className='contact-us section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div
                className='section-heading wow fadeIn'
                data-wow-duration='1s'
                data-wow-delay='0.5s'
              >
                <h6>Contato</h6>
                <h4>
                  Get In Touch With Us <em>Now</em>
                </h4>
                <div className='line-dec'></div>
              </div>
            </div>
            <div
              className='col-lg-12 wow fadeInUp'
              data-wow-duration='0.5s'
              data-wow-delay='0.25s'
            >
              <form id='contact' action='' method='post'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='contact-dec'>
                      <img src='assets/images/contact-dec.png' alt='' />
                    </div>
                  </div>
                  <div className='col-lg-5'>
                    <div id='map'>
                      <iframe
                        width='100%'
                        height='650'
                        scrolling='no'
                        src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=418%20R.%20Rodrigues%20Alves%20Salto,%20S%C3%A3o%20Paulo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                      ></iframe>
                    </div>
                  </div>
                  <div className='col-lg-7'>
                    <div className='fill-form'>
                      <div className='row'>
                        <div className='col-lg-4'>
                          <div className='info-post'>
                            <div className='icon'>
                              <img src={phone} alt='' />
                              <a href='#'>010-020-0340</a>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4'>
                          <div className='info-post'>
                            <div className='icon'>
                              <img src={email} alt='' />
                              <a href='#'>crafthub@email.com</a>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-4'>
                          <div className='info-post'>
                            <div className='icon'>
                              <img src={location} alt='' />
                              <a href='#'>Salto, SP</a>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <fieldset>
                            <input
                              type='name'
                              name='name'
                              id='name'
                              placeholder='Name'
                              required
                            />
                          </fieldset>
                          <fieldset>
                            <input
                              type='text'
                              name='email'
                              id='email'
                              pattern='[^ @]*@[^ @]*'
                              placeholder='Your Email'
                              required
                            />
                          </fieldset>
                          <fieldset>
                            <input
                              type='subject'
                              name='subject'
                              id='subject'
                              placeholder='Subject'
                            />
                          </fieldset>
                        </div>
                        <div className='col-lg-6'>
                          <fieldset>
                            <textarea
                              name='message'
                              className='form-control'
                              id='message'
                              placeholder='Message'
                              required
                            ></textarea>
                          </fieldset>
                        </div>
                        <div className='col-lg-12'>
                          <fieldset>
                            <button
                              type='submit'
                              id='form-submit'
                              className='main-button '
                            >
                              Send Message Now
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <p>
                Copyright © 2022 CraftHub Co., Ltd. All Rights Reserved.
                <br />
                Design:{' '}
                <a
                  href='https://templatemo.com'
                  target='_parent'
                  title='free css templates'
                >
                  CraftHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FaqPage;

import React, { useEffect } from 'react'
import './Navbar.css';
import dp from '../../assets/dp.jpeg';
import { useState } from 'react';
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid " >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-around " id="navbarSupportedContent">
                        <div className="searchform">
                        <div className="txt-1">
                            search
                        </div>
                        <form className="searchbar-form-1 d-flex" role="search">
                            <svg className="SearchIcon d-flex" width="5" height="5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.14511 7.06398L11.6923 10.6111L10.7699 11.5335L7.22273 7.98636C6.56035 8.46303 5.76178 8.75398 4.88892 8.75398C2.66654 8.75398 0.865112 6.95255 0.865112 4.73017C0.865112 2.50779 2.66654 0.70636 4.88892 0.70636C7.1113 0.70636 8.91273 2.50779 8.91273 4.73017C8.91273 5.60303 8.62178 6.4016 8.14511 7.06398ZM4.88892 1.94446C3.34749 1.94446 2.10321 3.18874 2.10321 4.73017C2.10321 6.2716 3.34749 7.51588 4.88892 7.51588C6.43035 7.51588 7.67464 6.2716 7.67464 4.73017C7.67464 3.18874 6.43035 1.94446 4.88892 1.94446Z" fill="#539BBB" />
                            </svg>

                            <input className="searchbar form-control " type="search" placeholder="Search by profile, setting, artifact etc..." aria-label="Search" />
                        </form>
                        </div>
                        <div className="d-flex contact-icon-navbar">
                            
                            <div className="contact-icon d-flex">
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.738892 12.5678L1.40408 12.5678L0.738892 12.5678ZM3.16277 15.4045L3.07141 16.0633L3.07141 16.0633L3.16277 15.4045ZM12.1973 15.4045L12.2886 16.0633L12.2886 16.0633L12.1973 15.4045ZM14.2072 11.0616L13.636 11.4023L14.2072 11.0616ZM1.1524 11.0623L0.581041 10.7216L1.1524 11.0623ZM2.94563 6.53748C2.94563 3.92326 5.06488 1.80402 7.6791 1.80402V0.473633C4.33013 0.473633 1.61525 3.18851 1.61525 6.53748H2.94563ZM2.94563 8.39542V6.53748H1.61525V8.39542H2.94563ZM1.40408 12.5678C1.40408 12.1409 1.52084 11.7433 1.72376 11.4029L0.581041 10.7216C0.258702 11.2623 0.0736999 11.8945 0.0736999 12.5678L1.40408 12.5678ZM3.25413 14.7456C2.19015 14.598 1.40408 13.673 1.40408 12.5678L0.0736999 12.5678C0.0736998 14.3059 1.31904 15.8203 3.07141 16.0633L3.25413 14.7456ZM7.68002 15.1282C6.35675 15.1282 4.64713 14.9387 3.25413 14.7456L3.07141 16.0633C4.47521 16.258 6.26031 16.4586 7.68002 16.4586V15.1282ZM12.1059 14.7456C10.7129 14.9387 9.0033 15.1282 7.68002 15.1282V16.4586C9.09973 16.4586 10.8848 16.258 12.2886 16.0633L12.1059 14.7456ZM13.956 12.5678C13.956 13.673 13.1699 14.598 12.1059 14.7456L12.2886 16.0633C14.041 15.8203 15.2863 14.3059 15.2863 12.5678H13.956ZM13.636 11.4023C13.8391 11.7428 13.956 12.1407 13.956 12.5678H15.2863C15.2863 11.8941 15.1011 11.2616 14.7785 10.7208L13.636 11.4023ZM12.4126 6.53748V8.39312H13.7429V6.53748H12.4126ZM7.6791 1.80402C10.2933 1.80402 12.4126 3.92326 12.4126 6.53748H13.7429C13.7429 3.18851 11.0281 0.473633 7.6791 0.473633V1.80402ZM14.7785 10.7208C14.5044 10.2612 14.2554 9.89305 14.0501 9.48186C13.8535 9.08816 13.7429 8.73692 13.7429 8.39312H12.4126C12.4126 9.02559 12.6167 9.58936 12.8598 10.0762C13.0942 10.5456 13.4099 11.0235 13.636 11.4023L14.7785 10.7208ZM1.61525 8.39542C1.61525 8.73897 1.50488 9.08998 1.30855 9.48344C1.10351 9.89436 0.85484 10.2624 0.581041 10.7216L1.72376 11.4029C1.94953 11.0242 2.26488 10.5466 2.49896 10.0774C2.74176 9.59087 2.94563 9.02744 2.94563 8.39542H1.61525Z" fill="#2F667F" />
                                    <path d="M9.60828 17.8428C9.19377 18.4662 8.48496 18.8771 7.68019 18.8771C6.87542 18.8771 6.16661 18.4662 5.7521 17.8428" stroke="#2F667F" stroke-width="1.33038" stroke-linecap="round" />
                                </svg>
                            </div>
                            <div className="contact-icon d-flex">
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.84723 18.1287L3.47442 18.3503H3.47442L2.84723 18.1287ZM4.20533 19.4868L3.98371 18.8596H3.98371L4.20533 19.4868ZM6.44272 18.6962L6.2211 18.069L6.44272 18.6962ZM7.21019 18.7695L7.53273 18.1878L7.21019 18.7695ZM3.30045 11.0074C3.30045 6.47641 6.97352 2.80334 11.5045 2.80334V1.47296C6.23876 1.47296 1.97006 5.74166 1.97006 11.0074H3.30045ZM4.20337 14.7531C3.6264 13.6309 3.30045 12.3582 3.30045 11.0074H1.97006C1.97006 12.5747 2.34875 14.0555 3.02021 15.3614L4.20337 14.7531ZM3.47442 18.3503L4.29775 16.0203L3.04337 15.5771L2.22004 17.9071L3.47442 18.3503ZM3.98371 18.8596C3.66736 18.9714 3.36264 18.6667 3.47442 18.3503L2.22004 17.9071C1.73565 19.2779 3.05613 20.5984 4.42695 20.114L3.98371 18.8596ZM6.2211 18.069L3.98371 18.8596L4.42695 20.114L6.66434 19.3234L6.2211 18.069ZM11.5045 19.2114C10.0623 19.2114 8.7089 18.8399 7.53273 18.1878L6.88765 19.3513C8.25616 20.11 9.8309 20.5418 11.5045 20.5418V19.2114ZM19.7085 11.0074C19.7085 15.5383 16.0354 19.2114 11.5045 19.2114V20.5418C16.7702 20.5418 21.0389 16.2731 21.0389 11.0074H19.7085ZM11.5045 2.80334C16.0354 2.80334 19.7085 6.47641 19.7085 11.0074H21.0389C21.0389 5.74166 16.7702 1.47296 11.5045 1.47296V2.80334ZM6.66434 19.3234C6.72243 19.3029 6.80391 19.3049 6.88765 19.3513L7.53273 18.1878C7.14638 17.9736 6.6698 17.9105 6.2211 18.069L6.66434 19.3234ZM3.02021 15.3614C3.06222 15.4431 3.06313 15.5212 3.04337 15.5771L4.29775 16.0203C4.45019 15.5889 4.39769 15.1311 4.20337 14.7531L3.02021 15.3614Z" fill="#2F667F" />
                                    <circle cx="7.11415" cy="11.0516" r="1.10865" fill="#2F667F" />
                                    <circle cx="11.5487" cy="11.0516" r="1.10865" fill="#2F667F" />
                                    <circle cx="15.9833" cy="11.0516" r="1.10865" fill="#2F667F" />
                                </svg>

                            </div>
                            <div className="contact-icon d-flex">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2.66077" cy="2.66077" r="2.66077" transform="matrix(-1 0 0 1 13.835 8.34665)" stroke="#2F667F" stroke-width="1.33038" />
                                    <path d="M15.1654 4.74349L14.8328 5.31956H14.8328L15.1654 4.74349ZM15.1653 17.2709L14.8327 16.6949L15.1653 17.2709ZM7.18303 17.2709L7.51562 16.6949H7.51562L7.18303 17.2709ZM7.18302 4.74349L7.51562 5.31956L7.18302 4.74349ZM8.44506 3.03845L9.09313 3.1884L8.44506 3.03845ZM3.10884 8.95282L2.68586 9.46621L3.10884 8.95282ZM2.79829 8.08306L2.17027 7.86382L2.79829 8.08306ZM4.43617 16.775L3.93103 17.2078L4.43617 16.775ZM8.99167 19.6061L9.15484 18.9612L8.99167 19.6061ZM8.44512 18.9762L7.79703 19.1261L8.44512 18.9762ZM13.9032 18.9762L14.5513 19.1261L13.9032 18.9762ZM13.3567 19.606L13.1935 18.9612L13.3567 19.606ZM17.9121 16.775L18.4172 17.2078L17.9121 16.775ZM17.106 16.9854L16.9533 17.6328L17.106 16.9854ZM19.2394 8.95285L19.6624 9.46622L19.2394 8.95285ZM2.79829 13.9317L3.42632 13.7124L2.79829 13.9317ZM17.1059 5.02908L17.2585 5.67652L17.1059 5.02908ZM17.9119 5.23947L18.417 4.80665L17.9119 5.23947ZM5.24244 5.02906L5.08977 5.67649L5.24244 5.02906ZM19.2394 13.0619L19.6624 12.5485L19.2394 13.0619ZM19.5499 13.9317L20.178 14.1509L19.5499 13.9317ZM13.9034 3.03848L13.2553 3.18844L13.9034 3.03848ZM13.2553 3.18844C13.4556 4.05395 14.0016 4.83965 14.8328 5.31956L15.498 4.16741C14.9992 3.87944 14.672 3.40983 14.5514 2.88852L13.2553 3.18844ZM14.8328 5.31956C15.5964 5.76041 16.4636 5.86393 17.2585 5.67652L16.9532 4.38164C16.475 4.49438 15.9566 4.43218 15.498 4.16741L14.8328 5.31956ZM20.178 7.86385C19.7828 6.73185 19.1805 5.69771 18.417 4.80665L17.4067 5.67229C18.0644 6.43976 18.5823 7.32957 18.9219 8.30234L20.178 7.86385ZM18.9347 11.0074C18.9347 10.3871 19.2169 9.8333 19.6624 9.46622L18.8164 8.43947C18.0773 9.04842 17.6043 9.97293 17.6043 11.0074H18.9347ZM19.6624 12.5485C19.2169 12.1815 18.9347 11.6277 18.9347 11.0074H17.6043C17.6043 12.0418 18.0773 12.9663 18.8164 13.5753L19.6624 12.5485ZM18.4172 17.2078C19.1806 16.3168 19.7828 15.2828 20.178 14.1509L18.9219 13.7124C18.5824 14.6851 18.0645 15.5748 17.4069 16.3422L18.4172 17.2078ZM15.4979 17.847C15.9565 17.5822 16.4751 17.52 16.9533 17.6328L17.2587 16.338C16.4637 16.1505 15.5964 16.254 14.8327 16.6949L15.4979 17.847ZM14.5513 19.1261C14.6719 18.6047 14.9991 18.135 15.4979 17.847L14.8327 16.6949C14.0014 17.1748 13.4554 17.9607 13.2552 18.8263L14.5513 19.1261ZM11.1741 20.5418C11.9827 20.5418 12.7687 20.441 13.5199 20.2509L13.1935 18.9612C12.5482 19.1245 11.8718 19.2114 11.1741 19.2114V20.5418ZM8.8285 20.2509C9.57959 20.441 10.3656 20.5418 11.1741 20.5418V19.2114C10.4765 19.2114 9.80012 19.1245 9.15484 18.9612L8.8285 20.2509ZM6.85043 17.847C7.34928 18.135 7.67644 18.6047 7.79703 19.1261L9.0932 18.8263C8.89299 17.9607 8.34696 17.1749 7.51562 16.6949L6.85043 17.847ZM5.39499 17.6328C5.87323 17.52 6.39178 17.5822 6.85043 17.847L7.51562 16.6949C6.75194 16.254 5.88457 16.1505 5.08957 16.338L5.39499 17.6328ZM2.17027 14.1509C2.56542 15.2828 3.16763 16.3169 3.93103 17.2078L4.9413 16.3422C4.28378 15.5748 3.76588 14.6851 3.42632 13.7124L2.17027 14.1509ZM3.4136 11.0074C3.4136 11.6277 3.13138 12.1815 2.68586 12.5485L3.53183 13.5753C4.27092 12.9664 4.74398 12.0418 4.74398 11.0074H3.4136ZM2.68586 9.46621C3.13138 9.83328 3.4136 10.3871 3.4136 11.0074H4.74398C4.74398 9.97291 4.27092 9.04838 3.53182 8.43943L2.68586 9.46621ZM3.93129 4.8066C3.16776 5.69766 2.56546 6.73181 2.17027 7.86382L3.42632 8.30231C3.76592 7.32953 4.28389 6.43972 4.94152 5.67225L3.93129 4.8066ZM6.85043 4.16741C6.39182 4.43219 5.87332 4.49439 5.39511 4.38162L5.08977 5.67649C5.88472 5.86395 6.75201 5.76043 7.51562 5.31956L6.85043 4.16741ZM7.79699 2.8885C7.67637 3.40981 7.34922 3.87944 6.85043 4.16741L7.51562 5.31956C8.34686 4.83964 8.89286 4.05393 9.09313 3.1884L7.79699 2.8885ZM11.1741 1.47296C10.3655 1.47296 9.57953 1.57377 8.82842 1.76383L9.15477 3.05356C9.80007 2.89028 10.4765 2.80334 11.1741 2.80334V1.47296ZM13.52 1.76388C12.7689 1.57379 11.9828 1.47296 11.1741 1.47296V2.80334C11.8718 2.80334 12.5483 2.89029 13.1936 3.05361L13.52 1.76388ZM9.09313 3.1884C9.10698 3.12856 9.13043 3.08635 9.14863 3.06421C9.16427 3.04519 9.16706 3.05045 9.15477 3.05356L8.82842 1.76383C8.21537 1.91895 7.89882 2.44839 7.79699 2.8885L9.09313 3.1884ZM3.53182 8.43943C3.47782 8.39494 3.44643 8.34681 3.43384 8.31461C3.42325 8.28754 3.43105 8.28875 3.42632 8.30231L2.17027 7.86382C1.93434 8.53964 2.29989 9.1482 2.68586 9.46621L3.53182 8.43943ZM5.08957 16.338C5.02994 16.3521 4.9818 16.3498 4.9539 16.3433C4.9299 16.3377 4.9332 16.3328 4.9413 16.3422L3.93103 17.2078C4.34173 17.6872 4.95546 17.7365 5.39499 17.6328L5.08957 16.338ZM9.15484 18.9612C9.16713 18.9643 9.16434 18.9696 9.1487 18.9506C9.1305 18.9284 9.10704 18.8862 9.0932 18.8263L7.79703 19.1261C7.89883 19.5663 8.21538 20.0958 8.8285 20.2509L9.15484 18.9612ZM13.2552 18.8263C13.2413 18.8862 13.2179 18.9284 13.1997 18.9505C13.184 18.9695 13.1812 18.9643 13.1935 18.9612L13.5199 20.2509C14.133 20.0958 14.4495 19.5663 14.5513 19.1261L13.2552 18.8263ZM17.4069 16.3422C17.415 16.3328 17.4183 16.3376 17.3944 16.3432C17.3664 16.3497 17.3183 16.352 17.2587 16.338L16.9533 17.6328C17.3928 17.7365 18.0065 17.6871 18.4172 17.2078L17.4069 16.3422ZM18.9219 8.30234C18.9172 8.28878 18.925 8.28757 18.9144 8.31465C18.9018 8.34684 18.8704 8.39497 18.8164 8.43947L19.6624 9.46622C20.0484 9.14822 20.4139 8.53967 20.178 7.86385L18.9219 8.30234ZM3.42632 13.7124C3.43105 13.726 3.42325 13.7272 3.43384 13.7001C3.44643 13.6679 3.47783 13.6198 3.53183 13.5753L2.68586 12.5485C2.29989 12.8665 1.93434 13.4751 2.17027 14.1509L3.42632 13.7124ZM17.2585 5.67652C17.3181 5.66247 17.3662 5.66478 17.3941 5.67127C17.4181 5.67686 17.4148 5.68174 17.4067 5.67229L18.417 4.80665C18.0063 4.32739 17.3927 4.27802 16.9532 4.38164L17.2585 5.67652ZM4.94152 5.67225C4.93342 5.6817 4.93012 5.67682 4.95412 5.67124C4.98202 5.66474 5.03014 5.66243 5.08977 5.67649L5.39511 4.38162C4.95561 4.27798 4.34196 4.32733 3.93129 4.8066L4.94152 5.67225ZM18.8164 13.5753C18.8704 13.6198 18.9018 13.6679 18.9144 13.7001C18.925 13.7272 18.9172 13.726 18.9219 13.7124L20.178 14.1509C20.4139 13.4751 20.0484 12.8665 19.6624 12.5485L18.8164 13.5753ZM14.5514 2.88852C14.4496 2.44843 14.133 1.91902 13.52 1.76388L13.1936 3.05361C13.1814 3.0505 13.1841 3.04524 13.1998 3.06426C13.218 3.08639 13.2414 3.1286 13.2553 3.18844L14.5514 2.88852Z" fill="#2F667F" />
                                </svg>

                            </div>
                            <img src={dp} alt="" />

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

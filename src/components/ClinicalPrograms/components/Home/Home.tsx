import { Grid } from "@material-ui/core";
import React from "react";
import './Home.scss';

export default class Home extends React.Component<any, any> {

    render(){
        return(
            <div className="home-container">
                <Grid container xs={12}>
                    <Grid item xs={8}>
                        <div className="content-wrapper">
                            <div className="icon-wrapper"><ProgramSummaryIcon /></div>
                            <div className="text-wrapper set-pharmacy-top-margin">
                                <span>Program Summary</span>
                                <p className="set-width">
                                    View the summary for all Clinical Programs or drill down to view the summary of a specific Clinical Program
                                </p>
                            </div>
                        </div>

                        <div className="content-wrapper">
                            <div className="icon-wrapper"><MembersIcon /></div>
                            <div className="text-wrapper set-top-margin">
                                <span>Members</span>
                                <p>
                                    View the prioritized list of members identified for each Clinical Program or search for a specific member by Name, Member ID or DOB
                                </p>
                            </div>
                        </div>


                        <div className="content-wrapper">
                            <div className="icon-wrapper"><PrescribersIcon /></div>
                            <div className="text-wrapper">
                                <span>Prescriber</span>
                                <p>                                    
                                    Search for prescribers related to members identified for Clinical Programs 
                                </p>
                            </div>
                        </div>

                        <div className="content-wrapper">
                            <div className="icon-wrapper"><PharmacyIcon /></div>
                            <div className="text-wrapper set-pharmacy-top-margin">
                                <span>Pharmacy</span>
                                <p>
                                    Search for pharmacies related to members identified for Clinical Programs 
                                </p>
                            </div>
                        </div>

                        <div className="content-wrapper">
                            <div className="icon-wrapper"><CalendarIcon /></div>
                            <div className="text-wrapper">
                                <span>Calendar</span>
                                <p>
                                    View calendar and make appointments.
                                </p>
                            </div>
                        </div>


                        <div className="content-wrapper">
                            <div className="icon-wrapper"><ReportsIcon /></div>
                            <div className="text-wrapper">
                                <span>Reports</span>
                                <p>
                                    View and interact with program reports available for each Clinical Program.
                                </p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
const ProgramSummaryIcon = () => (
    <svg width="125" height="82" viewBox="0 0 125 82" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.64355" y="6.29294" width="112.691" height="75.6291" rx="6.59458" fill="#C4C4C4"/>
        <path d="M10.1537 20.1588C10.6775 16.9724 13.4317 14.634 16.6609 14.634H68.031H117.233C121.302 14.634 124.4 18.2831 123.74 22.2984L114.846 76.3959C114.322 79.5823 111.568 81.9207 108.339 81.9207H7.76726C3.6981 81.9207 0.599915 78.2715 1.26003 74.2563L10.1537 20.1588Z" fill="#A0DEE1"/>
        <rect x="6.56445" width="40.4814" height="9.29978" rx="4.21321" fill="#C4C4C4"/>
    </svg>
);

const MembersIcon =()=>(
    <svg width="130" height="83" viewBox="0 0 130 83" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="29.5127" cy="37.1027" r="15.8496" fill="#E5E4E4"/>
    <path d="M29.5131 54.592C13.2135 54.592 0 67.1938 0 82.7388H59.0262C59.0262 67.1938 45.8128 54.592 29.5131 54.592Z" fill="#E5E4E4"/>
    <circle cx="100.486" cy="37.1695" r="15.8496" fill="#E5E4E4"/>
    <path d="M100.487 54.6587C84.1876 54.6587 70.9741 67.2605 70.9741 82.8055H130C130 67.2605 116.787 54.6587 100.487 54.6587Z" fill="#E5E4E4"/>
    <circle cx="64.7912" cy="21.3675" r="21.3674" fill="#9CDADE"/>
    <path d="M64.9056 44.7917C42.9445 44.7917 25.1416 61.7761 25.1416 82.7275H104.67C104.67 61.7761 86.8666 44.7917 64.9056 44.7917Z" fill="#9CDADE"/>
    </svg>

);

const PrescribersIcon =()=>(
    <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="46.6211" y="22.2321" width="20.7125" height="67.5702" fill="#9CDADE"/>
        <rect x="90.7656" y="45.6609" width="20.7125" height="67.5702" transform="rotate(90 90.7656 45.6609)" fill="#9CDADE"/>
        <g filter="url(#filter0_d)">
        <circle cx="57" cy="56" r="55.4505" stroke="#9CDADE" stroke-width="1.0991"/>
        </g>
        <defs>
        <filter id="filter0_d" x="0.267268" y="0" width="113.465" height="113.465" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
        <feOffset dy="0.732732"/>
        <feGaussianBlur stdDeviation="0.366366"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>
        </defs>
    </svg>
);


const PharmacyIcon =()=>(
    <svg width="116" height="75" viewBox="0 0 116 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M72.0591 24.5H0.0591173C-1.14088 42.9 16.2258 57.1667 25.0591 62V75H90.5591V62C113.359 47.6 116.726 31 115.559 24.5H94.5591L107.559 11.5L96.0591 0L90.5591 5.5L72.0591 24.5Z" fill="#9CDADE"/>
        <rect x="54.3608" y="33" width="8.27638" height="27" fill="white"/>
        <rect x="72" y="42.3618" width="8.27638" height="27" transform="rotate(90 72 42.3618)" fill="white"/>
    </svg>
);


const CalendarIcon =()=>(
    <svg width="135" height="125" viewBox="0 0 135 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_i)">
<rect y="12.9933" width="135" height="111.699" rx="13.9795" fill="#9CDADE"/>
</g>
<g filter="url(#filter1_d)">
<rect x="16.2734" y="6.70544" width="4.43836" height="11.0959" rx="1.59765" fill="white"/>
</g>
<g filter="url(#filter2_d)">
<rect x="30.6992" y="6.70544" width="4.43836" height="11.0959" rx="1.59765" fill="white"/>
</g>
<g filter="url(#filter3_d)">
<rect x="45.124" y="6.70544" width="4.43836" height="11.0959" rx="1.59765" fill="white"/>
</g>
<g filter="url(#filter4_d)">
<rect x="59.1777" y="6.70544" width="4.80822" height="11.0959" rx="1.59765" fill="white"/>
</g>
<g filter="url(#filter5_d)">
<rect x="73.6025" y="6.70544" width="4.80822" height="11.0959" rx="1.59765" fill="white"/>
</g>
<g filter="url(#filter6_d)">
<rect x="88.0269" y="6.70544" width="4.43836" height="11.0959" rx="1.59765" fill="white"/>
</g>
<g filter="url(#filter7_d)">
<rect x="102.452" y="6.70544" width="4.43836" height="11.0959" rx="1.59765" fill="white"/>
</g>
<g filter="url(#filter8_d)">
<rect x="116.877" y="6.70544" width="4.43836" height="11.0959" rx="1.59765" fill="white"/>
</g>
<circle cx="14.8624" cy="45.6858" r="3.61239" fill="white"/>
<circle cx="14.8624" cy="57.039" r="3.61239" fill="white"/>
<circle cx="14.8624" cy="69.4244" r="3.61239" fill="white"/>
<circle cx="14.8624" cy="81.8097" r="3.61239" fill="white"/>
<circle cx="14.8624" cy="93.1627" r="3.61239" fill="white"/>
<circle cx="14.8624" cy="105.548" r="3.61239" fill="white"/>
<circle cx="32.4083" cy="45.6858" r="3.61239" fill="white"/>
<circle cx="32.4083" cy="57.039" r="3.61239" fill="white"/>
<circle cx="32.4083" cy="69.4244" r="3.61239" fill="white"/>
<circle cx="32.4083" cy="81.8097" r="3.61239" fill="white"/>
<circle cx="32.4083" cy="93.1627" r="3.61239" fill="white"/>
<circle cx="32.4083" cy="105.548" r="3.61239" fill="white"/>
<circle cx="49.9532" cy="45.6858" r="3.61239" fill="white"/>
<circle cx="49.9532" cy="57.039" r="3.61239" fill="white"/>
<circle cx="49.9532" cy="69.4244" r="3.61239" fill="white"/>
<circle cx="49.9532" cy="81.8097" r="3.61239" fill="white"/>
<circle cx="49.9532" cy="93.1627" r="3.61239" fill="white"/>
<circle cx="49.9532" cy="105.548" r="3.61239" fill="white"/>
<circle cx="67.5006" cy="45.6858" r="3.61239" fill="white"/>
<circle cx="67.5001" cy="57.039" r="3.61239" fill="white"/>
<circle cx="67.5001" cy="69.4244" r="3.61239" fill="white"/>
<circle cx="67.5001" cy="81.8097" r="3.61239" fill="white"/>
<circle cx="67.5001" cy="93.1627" r="3.61239" fill="white"/>
<circle cx="67.5001" cy="105.548" r="3.61239" fill="white"/>
<circle cx="85.0474" cy="45.6858" r="3.61239" fill="white"/>
<circle cx="85.047" cy="57.039" r="3.61239" fill="white"/>
<circle cx="85.047" cy="69.4244" r="3.61239" fill="white"/>
<circle cx="85.047" cy="81.8097" r="3.61239" fill="white"/>
<circle cx="85.047" cy="93.1627" r="3.61239" fill="white"/>
<circle cx="85.047" cy="105.548" r="3.61239" fill="white"/>
<circle cx="120.138" cy="45.6858" r="3.61239" fill="white"/>
<circle cx="120.138" cy="57.039" r="3.61239" fill="white"/>
<circle cx="120.138" cy="69.4244" r="3.61239" fill="white"/>
<circle cx="120.138" cy="81.8097" r="3.61239" fill="white"/>
<circle cx="120.138" cy="93.1627" r="3.61239" fill="white"/>
<circle cx="120.138" cy="105.548" r="3.61239" fill="white"/>
<circle cx="102.591" cy="45.6858" r="3.61239" fill="white"/>
<circle cx="102.591" cy="57.039" r="3.61239" fill="white"/>
<circle cx="102.591" cy="69.4244" r="3.61239" fill="white"/>
<circle cx="102.591" cy="81.8097" r="3.61239" fill="white"/>
<circle cx="102.591" cy="93.1627" r="3.61239" fill="white"/>
<circle cx="102.591" cy="105.548" r="3.61239" fill="white"/>
<defs>
<filter id="filter0_i" x="0" y="12.9933" width="135" height="111.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="4.85894"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.247722 0 0 0 0 0.441565 0 0 0 0 0.566992 0 0 0 0.66 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<filter id="filter1_d" x="10.054" y="0.485996" width="16.8773" height="23.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.10972"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter2_d" x="24.4798" y="0.485996" width="16.8773" height="23.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.10972"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter3_d" x="38.9046" y="0.485996" width="16.8773" height="23.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.10972"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter4_d" x="52.9583" y="0.485996" width="17.2471" height="23.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.10972"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter5_d" x="67.3831" y="0.485996" width="17.2471" height="23.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.10972"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter6_d" x="81.8074" y="0.485996" width="16.8773" height="23.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.10972"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter7_d" x="96.2322" y="0.485996" width="16.8773" height="23.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.10972"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter8_d" x="110.658" y="0.485996" width="16.8773" height="23.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="3.10972"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>

);

const ReportsIcon =()=>(
    <svg width="103" height="115" viewBox="0 0 103 115" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="15.5" y="0.5" width="87" height="104.151" rx="2.79729" fill="#FBFEFE" stroke="#666666"/>
<rect x="41.478" y="17.9115" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="41.478" y="21.0265" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="41.478" y="40.4956" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="41.478" y="62.3009" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="41.478" y="84.885" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="41.478" y="43.6106" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="41.478" y="65.4159" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="41.478" y="88" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="25.4904" y="14.3841" width="10.9487" height="10.9487" rx="1.46546" stroke="#666666" stroke-width="0.732732"/>
<rect x="25.4904" y="37.7469" width="10.9487" height="10.9487" rx="1.46546" stroke="#666666" stroke-width="0.732732"/>
<rect x="25.4904" y="59.5522" width="10.9487" height="10.9487" rx="1.46546" stroke="#666666" stroke-width="0.732732"/>
<rect x="25.4904" y="81.3576" width="10.9487" height="10.9487" rx="1.46546" stroke="#666666" stroke-width="0.732732"/>
<rect x="0.5" y="9.56384" width="87" height="104.151" rx="2.79729" fill="#FBFEFE" stroke="#666666"/>
<rect x="26.4775" y="26.9753" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="26.4775" y="30.0903" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="26.4775" y="49.5594" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="26.4775" y="71.3647" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="26.4775" y="93.9489" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="26.4775" y="52.6744" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="26.4775" y="74.4797" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="26.4775" y="97.0638" width="50.6195" height="0.778761" rx="0.389381" fill="#96B0C5"/>
<rect x="10.4904" y="23.4479" width="10.9487" height="10.9487" rx="1.46546" stroke="#666666" stroke-width="0.732732"/>
<rect x="10.4904" y="46.8107" width="10.9487" height="10.9487" rx="1.46546" stroke="#666666" stroke-width="0.732732"/>
<rect x="10.4904" y="68.616" width="10.9487" height="10.9487" rx="1.46546" stroke="#666666" stroke-width="0.732732"/>
<rect x="10.4904" y="90.4213" width="10.9487" height="10.9487" rx="1.46546" stroke="#666666" stroke-width="0.732732"/>
</svg>

);





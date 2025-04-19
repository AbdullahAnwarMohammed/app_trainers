<template>
    <section class="banner">
        <div class="container-fluid">
            <div class="notification-section">
                <div class="notification-circle">
                    <span class="notification-icon text-white"><i class="fa-solid fa-bookmark"></i></span>
                </div>
                <div class="d-flex text-center" style="flex-direction: column;">
                    <span class="notification-count text-dark">203+</span>
                    <span class="notification-text">دورة تدريبية</span>
                </div>
            </div>

            <div class="manual-carousel">
                <div class="slides">
                    <div v-for="(slide, index) in slides" :key="index" class="slide"
                        :class="{ active: currentSlide === index }">
                        <h2>
                            <span>{{ slide.titleLine1 }}</span><br />
                            <span class="text-warning">{{ slide.titleLine2 }}</span>
                        </h2>
                        <p>{{ slide.description }}</p>
                        <a :href="slide.link" class="text-danger btn btn-light">{{ slide.linkText }}</a>
                    </div>
                </div>

                <div id="dots-container">
                    <span v-for="(slide, index) in slides" :key="'dot-' + index" @click="goToSlide(index)"
                        :class="{ active: currentSlide === index }"></span>
                </div>


                <div class="controls">
                    <button @click="prevSlide">‹</button>
                    <button @click="nextSlide">›</button>
                </div>


             
            </div>
            <div class="svg_left_top">
                <svg width="474" height="330" viewBox="0 0 474 330" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M-140.773 -83.1708C-83.5911 -70.2731 -5.43481 -33.1574 -30.1576 31.041C-50.274 83.263 -109.828 130.513 -94.8356 202.359C-76.0821 293.552 24.2098 321.177 102.013 286.181C141.387 268.677 175.121 242.894 212.628 222.627C252.936 199.595 296.059 182.104 335.421 158.151C419.787 106.572 464.777 31.041 427.283 -64.7581C423.535 -73.9708 418.853 -84.1047 415.092 -93.3174"
                        fill="#F7A0A8" />
                    <rect x="-146" y="-103.527" width="620" height="432.819" fill="url(#pattern0_20_11602)" />
                    <path
                        d="M-135.712 -83.1708C-78.5305 -70.2731 -0.374252 -33.1574 -25.097 31.041C-45.2134 83.263 -104.768 130.513 -89.775 202.359C-71.0216 293.552 29.2703 321.177 107.073 286.181C146.448 268.677 180.181 242.894 217.688 222.627C257.997 199.595 301.12 182.104 340.482 158.151C424.847 106.572 469.838 31.041 432.344 -64.7581C428.595 -73.9708 423.913 -84.1047 420.153 -93.3174"
                        fill="#782028" />
                    <path
                        d="M-68.0431 -85.3526C-46.854 -59.5571 -20.1498 -31.0105 -9.09462 1.23387C0.118042 26.1081 -10.9372 43.5995 -25.6774 63.8674C-68.0431 121.895 -98.4449 199.268 -34.8901 257.296C36.9561 321.772 126.306 263.744 188.94 216.772C220.263 193.741 253.416 172.564 288.411 154.139C317.892 138.477 351.045 124.658 374.077 99.7968C418.285 54.6673 414.6 -11.6512 409.072 -70.5997C409.072 -77.0486 408.151 -83.4974 407.23 -89.9463"
                        fill="#F7A0A8" />
                    <rect x="-76.4734" y="-98.8184" width="521.866" height="414.04" fill="url(#pattern1_20_11602)" />
                    <path
                        d="M-62.9826 -84.0879C-41.7934 -58.2925 -15.0893 -29.7458 -4.03411 2.49852C5.17855 27.3727 -5.87663 44.8642 -20.6169 65.132C-62.9825 123.159 -93.3843 200.533 -29.8296 258.56C42.0166 323.036 131.367 265.009 194 218.037C225.323 195.005 258.476 173.829 293.472 155.404C322.952 139.742 356.105 125.923 379.137 101.061C423.345 55.932 419.66 -10.3866 414.133 -69.335C414.133 -75.7839 413.211 -82.2328 412.29 -88.6816"
                        fill="#F04C5B" />
                    <path
                        d="M388.476 21.1489C388.476 -8.33167 379.264 -36.8783 381.106 -67.2801C381.106 -73.729 382.028 -79.2566 382.949 -84.7842H-48.1157C-26.9265 -57.1462 -2.98622 -32.2846 20.0454 -6.48912C37.5495 13.7787 33.8644 25.7426 16.3604 45.0892C-27.8478 92.0612 -77.5962 142.718 -30.6116 207.194C8.06896 259.694 78.9939 268.907 131.493 232.068C160.053 212.722 180.308 184.175 208.867 164.829C246.627 139.954 290.847 127.069 330.449 105.88C364.536 87.4675 389.398 61.672 388.476 21.1489Z"
                        fill="#F7A0A8" />
                    <rect x="-53.4541" y="-92.4561" width="476.131" height="377.391" fill="url(#pattern2_20_11602)" />
                    <path
                        d="M394.799 23.6713C394.799 -5.80919 385.586 -34.3558 387.429 -64.7576C387.429 -71.2065 388.35 -76.7341 389.271 -82.2617H-41.8059C-20.6167 -54.6237 3.32362 -29.7621 26.3553 -3.96665C43.8594 16.3012 40.1743 28.2777 22.6702 47.6117C-21.538 94.5837 -71.2864 145.241 -24.3018 209.729C14.3788 262.229 85.3038 271.442 137.816 234.604C166.375 215.257 186.631 186.71 215.19 167.364C252.949 142.49 297.17 129.604 336.772 108.415C370.846 89.99 395.72 64.1945 394.799 23.6713Z"
                        fill="#5A181E" />
                    <path
                        d="M22.2285 218.943C66.5629 245.95 104.209 231.841 141.968 199.597C184.334 162.759 223.027 130.514 275.526 111.168C304.086 100.113 361.192 90.9 363.034 51.2982C365.798 15.3814 338.16 -21.4693 332.632 -57.3861C326.183 -97.9092 328.026 -126.468 281.054 -138.445C201.838 -159.621 101.445 -148.566 24.071 -125.547C5.64566 -120.941 -33.9562 -109.886 -34.8775 -85.0241C-35.7987 -63.835 -5.39691 -48.186 9.33074 -38.9734C30.5199 -26.0756 114.33 4.31357 94.0747 39.3217C72.8855 74.3172 17.6221 82.6086 -7.23945 114.853C-33.0349 148.927 -12.6156 177.272 3.7905 201.465C3.77788 201.477 13.9623 213.908 22.2285 218.943Z"
                        fill="#F7A0A8" />
                    <rect x="-40.1274" y="-160" width="436.453" height="420.098" fill="url(#pattern3_20_11602)" />
                    <path
                        d="M27.2766 218.943C73.037 243.464 109.257 231.841 147.016 199.597C189.382 162.759 228.075 130.514 280.574 111.168C309.134 100.113 366.24 90.9 368.082 51.2982C370.846 15.3814 343.208 -21.4693 337.68 -57.3861C331.232 -97.9092 333.074 -126.468 286.102 -138.445C206.898 -159.621 106.493 -148.566 29.1191 -125.547C10.6937 -120.941 -28.9081 -109.886 -29.8294 -85.0241C-30.7506 -63.835 -0.348835 -48.186 14.3788 -38.9734C35.568 -26.0756 119.378 4.31357 99.1228 39.3217C77.9336 74.3172 22.6702 82.6086 -2.19138 114.853C-27.9869 148.927 -9.52365 174.016 10.7442 203.496C10.7316 203.496 18.9221 214.463 27.2766 218.943Z"
                        fill="#F3707C" />
                    <rect x="-0.449951" y="-92.4561" width="234.431" height="111.461" fill="url(#pattern4_20_11602)" />
                    <rect x="219.14" y="-96.3936" width="145.686" height="207.171" fill="url(#pattern5_20_11602)" />
                    <path
                        d="M332.051 -15.122C330.209 -32.626 329.288 -53.8025 315.469 -66.7003C296.135 -86.0469 262.048 -85.1256 237.186 -86.0469L231.659 -85.1256C221.525 -50.1301 248.241 -32.626 270.339 -11.4369C297.056 15.2798 288.765 30.0075 282.316 62.2518C274.946 98.1686 307.19 79.7559 321.918 64.0943C344.028 39.2328 336.658 14.3586 332.051 -15.122Z"
                        fill="#F7A0A8" />
                    <rect x="223.077" y="-92.4561" width="145.686" height="207.171" fill="url(#pattern6_20_11602)" />
                    <path
                        d="M335.85 -11.3222C334.008 -28.8262 333.087 -50.0027 319.268 -62.9005C299.921 -82.2471 265.847 -81.3258 240.973 -82.2471L235.445 -81.3258C225.311 -46.3303 252.028 -28.8262 274.126 -7.6371C300.842 19.0796 292.551 33.8073 286.102 66.0516C278.732 101.968 310.976 83.5557 325.704 67.8941C347.814 43.0199 340.444 18.1457 335.85 -11.3222Z"
                        fill="#F15866" />
                    <path
                        d="M208.047 -28.0065C181.33 -30.7703 166.602 -14.1875 154.626 6.06775C138.964 30.942 126.735 54.2008 103.047 70.5438C89.1779 80.1098 80.0662 79.5672 74.0338 82.0029C74.0212 82.0029 -12.4139 97.147 -1.03054 152.524C4.35824 178.748 22.0012 204.102 47.784 210.551C76.3433 217.921 102.126 202.26 123.315 185.677C146.347 166.33 167.523 146.075 192.398 129.492C214.508 113.831 240.291 100.012 258.716 79.7565C298.318 37.3908 258.716 -20.649 208.047 -28.0065Z"
                        fill="#F7A0A8" />
                    <rect x="-8.93042" y="-34.9082" width="314.089" height="278.955" fill="url(#pattern7_20_11602)" />
                    <path
                        d="M210.571 -24.2194C183.854 -26.9832 169.126 -10.4004 157.15 9.85486C141.488 34.7291 114.683 78.0034 91.7903 82.8116C91.7776 82.8116 83.991 85.1211 83.9784 85.1211C41.6506 95.3812 -0.664548 110.525 1.48087 156.311C3.3234 183.028 24.5125 207.889 50.2954 214.338C78.8547 221.708 104.638 206.047 125.827 189.464C148.858 170.117 170.035 149.862 194.909 133.279C217.019 117.618 242.802 103.799 261.228 83.5436C300.842 41.1779 261.24 -16.8493 210.571 -24.2194Z"
                        fill="#F15866" />
                    <path
                        d="M178.579 -0.959245C160.153 11.9385 144.795 33.6324 136.503 52.979C128.856 72.5149 115.933 81.3111 98.6431 90.8393C66.2095 101.92 5.15345 115.625 29.3588 165.765C55.1543 219.186 99.3625 185.111 127.909 158.395C150.02 138.127 173.96 120.635 198.834 103.131C215.417 91.1548 234.751 78.2571 241.2 57.0805C254.11 20.2299 217.259 -31.3484 178.579 -0.959245Z"
                        fill="#F7A0A8" />
                    <rect x="16.2087" y="-17.9473" width="258.056" height="242.306" fill="url(#pattern8_20_11602)" />
                    <path
                        d="M181.103 1.56126C162.678 14.459 147.319 36.1529 139.028 55.4995C131.38 75.0354 118.457 83.8316 101.167 93.3598C68.7336 104.44 7.67762 118.146 31.883 168.285C57.6784 221.706 101.887 187.632 130.433 160.915C152.544 140.647 176.484 123.156 201.358 105.652C217.941 93.6753 237.275 80.7776 243.724 59.601C256.634 22.7504 219.784 -28.8279 181.103 1.56126Z"
                        fill="#F3707C" />
                    <path
                        d="M128.843 130.992C116.867 142.047 56.9968 190.862 51.4692 151.26C46.8629 120.858 111.339 113.5 128.843 100.603C155.56 81.2561 148.19 40.733 174.894 19.5438C204.374 -5.33036 227.393 21.3864 208.047 51.7756C186.858 85.8498 146.334 109.803 118.696 139.283"
                        fill="#F7A0A8" />
                    <rect x="43.4683" y="4.46387" width="202.022" height="195.056" fill="url(#pattern9_20_11602)" />
                    <path
                        d="M131.367 136.043C119.391 147.098 59.5208 195.912 53.9932 156.311C49.3868 125.909 113.863 118.551 131.367 105.653C158.084 86.3069 150.714 45.7838 177.418 24.5946C206.898 -0.279577 229.917 26.4372 210.571 56.8263C189.382 90.9006 148.858 114.854 121.22 144.334"
                        fill="#F7A0A8" />
                    <path
                        d="M261.442 -66.4976C261.442 -66.4976 248.406 -59.7711 254.287 -47.5675C260.18 -35.3638 290.039 -29.4829 293.409 -12.6476C296.778 4.17493 331.269 5.86603 322.435 -27.7918C313.601 -61.4495 293.409 -76.1646 261.442 -66.4976Z"
                        fill="#F7A0A8" />
                    <rect x="246.399" y="-78.5244" width="109.038" height="106.615" fill="url(#pattern10_20_11602)" />
                    <path
                        d="M265.228 -65.2368C265.228 -65.2368 252.191 -58.5103 258.072 -46.3067C263.966 -34.1031 293.825 -28.2221 297.195 -11.3869C300.564 5.43568 335.055 7.12677 326.221 -26.531C317.387 -60.1888 297.195 -74.9038 265.228 -65.2368Z"
                        fill="#F3707C" />
                    <defs>
                        <pattern id="pattern0_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_20_11602" />
                        </pattern>
                        <pattern id="pattern1_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image1_20_11602" />
                        </pattern>
                        <pattern id="pattern2_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image2_20_11602" />
                        </pattern>
                        <pattern id="pattern3_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image3_20_11602" />
                        </pattern>
                        <pattern id="pattern4_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image4_20_11602" />
                        </pattern>
                        <pattern id="pattern5_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image5_20_11602" />
                        </pattern>
                        <pattern id="pattern6_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image6_20_11602" />
                        </pattern>
                        <pattern id="pattern7_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image7_20_11602" />
                        </pattern>
                        <pattern id="pattern8_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image8_20_11602" />
                        </pattern>
                        <pattern id="pattern9_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image9_20_11602" />
                        </pattern>
                        <pattern id="pattern10_20_11602" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image10_20_11602" />
                        </pattern>
                        <image id="image0_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACAIAAAWZCAYAAADt7CVGAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image1_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABr0AAAVbCAYAAACcR2FLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image2_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABicAAATiCAYAAADRfDBiAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image3_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaIAAAVwCAYAAAC+ayjaAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image4_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwsAAAF3CAYAAADq2dcpAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image5_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeMAAAKwCAYAAACrhRf8AAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image6_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAAKwCAYAAABTZewLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image7_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBIAAAOdCAYAAAA4GUFFAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image8_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1oAAAMkCAYAAAChilEvAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image9_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAp8AAAKKCAYAAAB78zAgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image10_20_11602" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWsAAAFmCAYAAACr2LumAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                    </defs>
                </svg>
            </div>
            <img src="assets/images/freepik__guy-college-student-with-books-and-glasses__26664 1.png" class="character">
            <div class="svg_right_top">
                <svg width="282" height="144" viewBox="0 0 282 144" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M5.22729 -269.171C62.4089 -256.273 140.565 -219.157 115.842 -154.959C95.726 -102.737 36.1718 -55.4874 51.1644 16.3588C69.9179 107.552 170.21 135.177 248.013 100.181C287.387 82.6773 321.121 56.8945 358.628 36.6266C398.936 13.5949 442.059 -3.89648 481.421 -27.8494C565.787 -79.4277 610.777 -154.959 573.283 -250.758C569.535 -259.971 564.853 -270.105 561.092 -279.317"
                        fill="#F7A0A8" />
                    <rect y="-289.527" width="620" height="432.819" fill="url(#pattern0_20_7624)" />
                    <path
                        d="M10.288 -269.171C67.4696 -256.273 145.626 -219.157 120.903 -154.959C100.787 -102.737 41.2324 -55.4874 56.2251 16.3588C74.9786 107.552 175.27 135.177 253.073 100.181C292.448 82.6773 326.182 56.8945 363.688 36.6266C403.997 13.5949 447.12 -3.89648 486.482 -27.8494C570.847 -79.4277 615.838 -154.959 578.344 -250.758C574.596 -259.971 569.913 -270.105 566.153 -279.317"
                        fill="#782028" />
                    <path
                        d="M77.9568 -271.353C99.1459 -245.557 125.85 -217.01 136.905 -184.766C146.118 -159.892 135.063 -142.4 120.322 -122.133C77.9568 -64.1054 47.555 13.2683 111.11 71.2955C182.956 135.772 272.306 77.7444 334.94 30.7724C366.263 7.74072 399.416 -13.4358 434.411 -31.8611C463.892 -47.5226 497.045 -61.3416 520.076 -86.2032C564.285 -131.333 560.6 -197.651 555.072 -256.6C555.072 -263.049 554.151 -269.497 553.229 -275.946"
                        fill="#F7A0A8" />
                    <rect x="69.5266" y="-284.818" width="521.866" height="414.04" fill="url(#pattern1_20_7624)" />
                    <path
                        d="M83.0174 -270.088C104.207 -244.292 130.911 -215.746 141.966 -183.501C151.179 -158.627 140.123 -141.136 125.383 -120.868C83.0175 -62.8408 52.6157 14.533 116.17 72.5602C188.017 137.036 277.367 79.009 340 32.037C371.323 9.00537 404.476 -12.1711 439.472 -30.5965C468.952 -46.258 502.105 -60.077 525.137 -84.9386C569.345 -130.068 565.66 -196.387 560.133 -255.335C560.133 -261.784 559.211 -268.233 558.29 -274.682"
                        fill="#F04C5B" />
                    <path
                        d="M534.476 -164.851C534.476 -194.332 525.263 -222.878 527.106 -253.28C527.106 -259.729 528.027 -265.257 528.949 -270.784H97.8841C119.073 -243.146 143.014 -218.285 166.045 -192.489C183.549 -172.221 179.864 -160.257 162.36 -140.911C118.152 -93.9388 68.4035 -43.2818 115.388 21.1943C154.069 73.6938 224.994 82.9066 277.493 46.0685C306.052 26.7219 326.308 -1.82477 354.867 -21.1714C392.626 -46.0456 436.847 -58.9307 476.449 -80.1198C510.536 -98.5325 535.397 -124.328 534.476 -164.851Z"
                        fill="#F7A0A8" />
                    <rect x="92.5458" y="-278.456" width="476.131" height="377.391" fill="url(#pattern2_20_7624)" />
                    <path
                        d="M540.799 -162.329C540.799 -191.809 531.586 -220.356 533.429 -250.758C533.429 -257.207 534.35 -262.734 535.271 -268.262H104.194C125.383 -240.624 149.324 -215.762 172.355 -189.967C189.859 -169.699 186.174 -157.722 168.67 -138.388C124.462 -91.4163 74.7136 -40.7593 121.698 23.7294C160.379 76.229 231.304 85.4417 283.816 48.6036C312.375 29.257 332.631 0.710358 361.19 -18.6363C398.949 -43.5105 443.17 -56.3956 482.772 -77.5847C516.846 -96.01 541.72 -121.806 540.799 -162.329Z"
                        fill="#5A181E" />
                    <path
                        d="M168.228 32.9435C212.563 59.9504 250.208 45.8412 287.968 13.5969C330.333 -23.2412 369.027 -55.4855 421.526 -74.8321C450.086 -85.8873 507.191 -95.1 509.034 -134.702C511.798 -170.619 484.16 -207.469 478.632 -243.386C472.183 -283.909 474.026 -312.468 427.054 -324.445C347.838 -345.621 247.445 -334.566 170.071 -311.547C151.646 -306.941 112.044 -295.886 111.122 -271.024C110.201 -249.835 140.603 -234.186 155.331 -224.973C176.52 -212.076 260.33 -181.686 240.075 -146.678C218.885 -111.683 163.622 -103.391 138.76 -71.1471C112.965 -37.0728 133.384 -8.72809 149.79 15.4646C149.778 15.4773 159.962 27.908 168.228 32.9435Z"
                        fill="#F7A0A8" />
                    <rect x="105.873" y="-346" width="436.453" height="420.098" fill="url(#pattern3_20_7624)" />
                    <path
                        d="M173.277 32.9435C219.037 57.4643 255.257 45.8412 293.016 13.5969C335.382 -23.2412 374.075 -55.4855 426.574 -74.8321C455.134 -85.8873 512.24 -95.1 514.082 -134.702C516.846 -170.619 489.208 -207.469 483.68 -243.386C477.232 -283.909 479.074 -312.468 432.102 -324.445C352.898 -345.621 252.493 -334.566 175.119 -311.547C156.694 -306.941 117.092 -295.886 116.171 -271.024C115.249 -249.835 145.651 -234.186 160.379 -224.973C181.568 -212.076 265.378 -181.686 245.123 -146.678C223.934 -111.683 168.67 -103.391 143.809 -71.1471C118.013 -37.0728 136.476 -11.9841 156.744 17.4965C156.732 17.4965 164.922 28.4633 173.277 32.9435Z"
                        fill="#F3707C" />
                    <path
                        d="M354.047 -214.006C327.33 -216.77 312.602 -200.187 300.626 -179.932C284.964 -155.058 272.735 -131.799 249.047 -115.456C235.178 -105.89 226.066 -106.433 220.034 -103.997C220.021 -103.997 133.586 -88.853 144.969 -33.4761C150.358 -7.25151 168.001 18.1022 193.784 24.5511C222.343 31.9212 248.126 16.2597 269.315 -0.323074C292.347 -19.6697 313.523 -39.9249 338.398 -56.5077C360.508 -72.1693 386.291 -85.9883 404.716 -106.244C444.318 -148.609 404.716 -206.649 354.047 -214.006Z"
                        fill="#F7A0A8" />
                    <rect x="137.069" y="-220.908" width="314.089" height="278.955" fill="url(#pattern4_20_7624)" />
                    <path
                        d="M356.571 -210.219C329.854 -212.983 315.126 -196.4 303.15 -176.145C287.488 -151.271 260.683 -107.997 237.79 -103.188C237.778 -103.188 229.991 -100.879 229.978 -100.879C187.651 -90.6188 145.335 -75.4747 147.481 -29.6889C149.323 -2.97221 170.513 21.8894 196.295 28.3382C224.855 35.7084 250.638 20.0468 271.827 3.46404C294.858 -15.8826 316.035 -36.1378 340.909 -52.7206C363.019 -68.3822 388.802 -82.2012 407.228 -102.456C446.842 -144.822 407.24 -202.849 356.571 -210.219Z"
                        fill="#F15866" />
                    <path
                        d="M324.579 -186.959C306.153 -174.062 290.795 -152.368 282.503 -133.021C274.856 -113.485 261.933 -104.689 244.643 -95.1607C212.209 -84.0803 151.153 -70.3748 175.359 -20.2352C201.154 33.1856 245.362 -0.888641 273.909 -27.6054C296.02 -47.8732 319.96 -65.3647 344.834 -82.8687C361.417 -94.8452 380.751 -107.743 387.2 -128.919C400.11 -165.77 363.259 -217.348 324.579 -186.959Z"
                        fill="#F7A0A8" />
                    <rect x="162.209" y="-203.947" width="258.056" height="242.306" fill="url(#pattern5_20_7624)" />
                    <path
                        d="M327.103 -184.439C308.677 -171.541 293.319 -149.847 285.027 -130.5C277.38 -110.965 264.457 -102.168 247.167 -92.6402C214.733 -81.5598 153.677 -67.8543 177.883 -17.7147C203.678 35.7061 247.886 1.63187 276.433 -25.0849C298.543 -45.3527 322.484 -62.8442 347.358 -80.3482C363.941 -92.3247 383.275 -105.222 389.724 -126.399C402.634 -163.25 365.783 -214.828 327.103 -184.439Z"
                        fill="#F3707C" />
                    <path
                        d="M274.843 -55.0081C262.866 -43.9529 202.997 4.86159 197.469 -34.7402C192.863 -65.1421 257.339 -72.4996 274.843 -85.3973C301.56 -104.744 294.19 -145.267 320.894 -166.456C350.374 -191.33 373.393 -164.614 354.047 -134.224C332.858 -100.15 292.334 -76.1973 264.696 -46.7167"
                        fill="#F7A0A8" />
                    <rect x="189.468" y="-181.536" width="202.022" height="195.056" fill="url(#pattern6_20_7624)" />
                    <path
                        d="M277.367 -49.9573C265.391 -38.9021 205.521 9.91237 199.993 -29.6895C195.387 -60.0913 259.863 -67.4488 277.367 -80.3465C304.084 -99.6931 296.714 -140.216 323.418 -161.405C352.898 -186.28 375.917 -159.563 356.571 -129.174C335.382 -95.0994 294.858 -71.1465 267.22 -41.666"
                        fill="#F7A0A8" />
                    <defs>
                        <pattern id="pattern0_20_7624" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_20_7624" />
                        </pattern>
                        <pattern id="pattern1_20_7624" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image1_20_7624" />
                        </pattern>
                        <pattern id="pattern2_20_7624" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image2_20_7624" />
                        </pattern>
                        <pattern id="pattern3_20_7624" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image3_20_7624" />
                        </pattern>
                        <pattern id="pattern4_20_7624" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image4_20_7624" />
                        </pattern>
                        <pattern id="pattern5_20_7624" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image5_20_7624" />
                        </pattern>
                        <pattern id="pattern6_20_7624" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image6_20_7624" />
                        </pattern>
                        <image id="image0_20_7624" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACAIAAAWZCAYAAADt7CVGAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image1_20_7624" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABr0AAAVbCAYAAACcR2FLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image2_20_7624" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABicAAATiCAYAAADRfDBiAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image3_20_7624" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaIAAAVwCAYAAAC+ayjaAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image4_20_7624" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABBIAAAOdCAYAAAA4GUFFAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image5_20_7624" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1oAAAMkCAYAAAChilEvAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image6_20_7624" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAp8AAAKKCAYAAAB78zAgAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                    </defs>
                </svg>

            </div>

            <div class="svg_bottom_right">
                <svg width="1244" height="232" viewBox="0 0 1244 232" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path
                        d="M871.684 345.182C871.684 345.182 862.4 294.12 925.841 270.91C989.283 247.699 1069.74 199.732 1080.58 127.006C1091.41 54.2808 1170.32 14.0497 1222.93 57.3755C1275.54 100.701 1309.58 7.86035 1309.58 7.86035L1301.85 351.372L871.684 345.182Z"
                        fill="#F7A0A8" />
                    <rect x="865" width="485" height="390.303" fill="url(#pattern0_20_7703)" />
                    <path
                        d="M877.874 349.824C877.874 349.824 868.59 298.761 932.031 275.551C995.473 252.341 1075.93 204.373 1086.77 131.648C1097.6 58.9224 1176.51 18.6913 1229.12 62.0171C1281.73 105.343 1315.77 12.502 1315.77 12.502L1308.04 356.013L877.874 349.824Z"
                        fill="#F37681" />
                    <path
                        d="M915.072 345.787C915.072 345.787 906.701 299.784 963.86 278.88C1021.02 257.975 1093.5 214.758 1103.26 149.243C1113.02 83.7281 1184.11 47.4738 1231.5 86.5133C1278.9 125.553 1309.57 41.9033 1309.57 41.9033L1302.61 351.373L915.072 345.787Z"
                        fill="#F7A0A8" />
                    <rect x="908.449" y="34.1611" width="441.551" height="356.137" fill="url(#pattern1_20_7703)" />
                    <path
                        d="M921.277 350.439C921.277 350.439 912.906 304.437 970.065 283.532C1027.22 262.627 1099.7 219.41 1109.47 153.895C1119.23 88.3805 1190.31 52.1261 1237.71 91.1657C1285.1 130.205 1315.77 46.5557 1315.77 46.5557L1308.81 356.025L921.277 350.439Z"
                        fill="#D75262" />
                    <path
                        d="M986.188 334.353C986.188 334.353 973.809 298.764 1018.68 281.743C1063.56 264.722 1120.81 221.397 1137.83 153.313C1154.85 85.2299 1243.05 88.3246 1263.16 144.029C1283.28 199.734 1258.52 329.711 1258.52 329.711L986.188 334.353Z"
                        fill="#F7A0A8" />
                    <rect x="978.266" y="94.3262" width="333.113" height="278.894" fill="url(#pattern2_20_7703)" />
                    <path
                        d="M992.377 338.991C992.377 338.991 979.998 303.402 1024.87 286.381C1069.74 269.36 1127 226.034 1144.02 157.951C1161.04 89.8676 1249.24 92.9623 1269.35 148.667C1289.47 204.371 1264.71 334.349 1264.71 334.349L992.377 338.991Z"
                        fill="#F3707C" />
                    <path
                        d="M1106.79 294.163C1106.79 294.163 1085.16 243.766 1140.52 224.656C1195.88 205.547 1150.84 154.84 1197.73 142.987C1244.61 131.119 1244.5 234.08 1213.21 272.036C1181.94 309.993 1116.44 322.619 1106.79 294.163Z"
                        fill="#F7A0A8" />
                    <rect x="1096.36" y="134.063" width="178.997" height="214.648" fill="url(#pattern3_20_7703)" />
                    <path
                        d="M1112.98 298.805C1112.98 298.805 1091.35 248.408 1146.71 229.298C1202.07 210.188 1157.03 159.482 1203.91 147.629C1250.8 135.761 1250.69 238.721 1219.4 276.678C1188.13 314.634 1122.63 327.261 1112.98 298.805Z"
                        fill="#F7A0A8" />
                    <path
                        d="M9.63992 235.759C9.63992 235.759 71.1624 248.061 116.283 192.697C161.404 137.317 204.466 108.614 220.868 155.777C237.27 202.94 233.17 233.701 298.793 268.578C364.416 303.456 23.9838 313.699 23.9838 313.699L9.63992 235.759Z"
                        fill="#F7A0A8" />
                    <rect y="125.711" width="344.625" height="228.388" fill="url(#pattern4_20_7703)" />
                    <path
                        d="M12.7501 241.943C12.7501 241.943 74.2726 254.244 119.393 198.88C164.514 143.501 207.577 114.797 223.978 161.96C240.38 209.124 236.28 239.885 301.903 274.762C367.526 309.624 27.094 319.883 27.094 319.883L12.7501 241.943Z"
                        fill="#F37681" />
                    <path
                        d="M41.2214 258.624C41.2214 258.624 87.1467 267.32 120.832 228.204C154.518 189.087 186.672 168.801 198.912 202.131C211.167 235.461 208.103 257.185 257.092 281.819C306.081 306.453 51.929 313.694 51.929 313.694L41.2214 258.624Z"
                        fill="#F7A0A8" />
                    <rect x="31.9373" y="178.818" width="268.867" height="175.284" fill="url(#pattern5_20_7703)" />
                    <path
                        d="M44.4862 264.822C44.4862 264.822 90.4115 273.518 124.097 234.401C157.783 195.284 189.937 174.998 202.176 208.328C214.431 241.658 211.368 263.383 260.357 288.016C309.346 312.65 55.1939 319.892 55.1939 319.892L44.4862 264.822Z"
                        fill="#D75262" />
                    <defs>
                        <pattern id="pattern0_20_7703" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_20_7703" />
                        </pattern>
                        <pattern id="pattern1_20_7703" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image1_20_7703" />
                        </pattern>
                        <pattern id="pattern2_20_7703" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image2_20_7703" />
                        </pattern>
                        <pattern id="pattern3_20_7703" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image3_20_7703" />
                        </pattern>
                        <pattern id="pattern4_20_7703" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image4_20_7703" />
                        </pattern>
                        <pattern id="pattern5_20_7703" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image5_20_7703" />
                        </pattern>
                        <image id="image0_20_7703" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABSEAAAQiCAYAAABUaDiQAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image1_20_7703" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABKwAAAPDCAYAAACeopNIAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image2_20_7703" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4gAAAL2CAYAAAAD77jLAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image3_20_7703" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeMAAAJHCAYAAACjEj5dAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image4_20_7703" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6UAAAJpCAYAAABVfJQ9AAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                        <image id="image5_20_7703" preserveAspectRatio="none"
                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtkAAAHbCAYAAAAebYYIAAAACXBIWXMAAC4jAAAuIwF4pT92AAAA" />
                    </defs>
                </svg>

            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const currentSlide = ref(0);

const slides = ref([
    {
        titleLine1: 'ابدأ رحلتك في عالم',
        titleLine2: 'البرمجة اليوم',
        description:
            'تعلم من أفضل الخبراء، وانطلق في بناء مستقبلك التقني مع دوراتنا الشاملة والمبتكرة. سواء كنت مبتدئًا أو محترفًا، لدينا ما يناسبك لتطوير مهاراتك وتحقيق أهدافك.',
        link: '#',
        linkText: 'اشهر الكورسات لدينا',
    },
    {
        titleLine1: 'ابدأ رحلتك في عالم 22',
        titleLine2: 'البرمجة اليوم',
        description:
            'تعلم من أفضل الخبراء، وانطلق في بناء مستقبلك التقني مع دوراتنا الشاملة والمبتكرة. سواء كنت مبتدئًا أو محترفًا، لدينا ما يناسبك لتطوير مهاراتك وتحقيق أهدافك.',
        link: '#',
        linkText: 'اشهر الكورسات لدينا',
    },
    {
        titleLine1: 'ابدأ رحلتك في عالم',
        titleLine2: 'البرمجة اليوم',
        description:
            'تعلم من أفضل الخبراء، وانطلق في بناء مستقبلك التقني مع دوراتنا الشاملة والمبتكرة. سواء كنت مبتدئًا أو محترفًا، لدينا ما يناسبك لتطوير مهاراتك وتحقيق أهدافك.',
        link: '#',
        linkText: 'اشهر الكورسات لدينا',
    },
]);

function goToSlide(index) {
    currentSlide.value = index;
}

function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
}

function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
}
</script>

<style scoped>
.slider {
    text-align: center;
    padding: 2rem;
}

.slides {
    position: relative;
}

.slide {
    display: none;
    transition: opacity 0.5s ease-in-out;
}

.slide.active {
    display: block;
}

#dots-container {
    position: relative;
    z-index: 99999999;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
}

#dots-container span {
    display: inline-block;
    width: 30px;
    height: 7px;
    margin: 0 5px;
    background-color: #ccc;
    border-radius: 10%;
    cursor: pointer;
    transition: background-color 0.3s;
}

#dots-container span.active {
    background-color: #ff606a;
}

.nav-buttons {
    margin-top: 1.5rem;
}
</style>
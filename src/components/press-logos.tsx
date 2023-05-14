import { useRouter } from "next/router";
import { homeContent } from "../translations/home";

export default function PressLogos() {
  const { locale } = useRouter();

  const homeLocale = locale || "en";

  if (homeLocale !== "en" && homeLocale !== "pt") {
    throw new Error("Invalid language: " + homeLocale);
  }

  const { pressTitle } = homeContent[homeLocale];
  return (
    <section className="pt-10">
      <h4
        className="h4 font-uncut-sans p-10 text-center text-gray-700 "
        data-aos="zoom-out"
      >
        {pressTitle}
      </h4>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-b border-gray-800 py-6">
          <div className="mx-auto grid max-w-sm grid-cols-4 gap-2 md:max-w-5xl md:grid-cols-5">
            <div
              className="col-span-2 flex items-center justify-center py-2 md:col-auto"
              data-aos="zoom-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full fill-gray-500"
                width="124"
                height="24"
                viewBox="0 0 420 93"
                fill="none"
              >
                <path d="M409.625 92.4313C399.217 92.4313 389.395 87.7525 389.395 76.465V3.92621H404.565V25.1277H420V39.1144H404.565V74.4712C404.565 76.554 406.157 78.2327 408.599 78.2327H420V92.4313H409.625Z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M346.587 78.3618C357.991 78.3618 367.236 69.221 367.236 57.9454C367.236 46.6697 357.991 37.5289 346.587 37.5289C335.183 37.5289 325.938 46.6697 325.938 57.9454C325.938 69.221 335.183 78.3618 346.587 78.3618ZM346.587 92.9999C366.168 92.9999 382.041 77.3055 382.041 57.9454C382.041 38.5852 366.168 22.8908 346.587 22.8908C327.006 22.8908 311.133 38.5852 311.133 57.9454C311.133 77.3055 327.006 92.9999 346.587 92.9999Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M303.779 3.78237H288.609V29.6091C283.398 25.5462 275.437 23.327 269.039 23.3128C248.719 23.3128 233.4 38.4043 233.4 58.4417C234.028 76.9042 249.242 92.7224 268.164 93C284.958 93 303.759 80.0397 303.759 57.9978C303.759 35.956 303.779 3.78237 303.779 3.78237ZM268.508 37.3263C279.743 37.3263 288.951 47.0267 288.984 57.9978C289.104 69.2621 279.816 79.1303 268.257 78.9865C257.037 78.6755 248.214 69.0444 248.219 58.093C248.297 47.3444 257.349 37.3263 268.508 37.3263Z"
                />
                <path d="M192.669 92.9373C174.235 92.3602 159.04 77.1391 158.697 58.9062C158.697 39.0995 173.466 23.6136 192.318 23.6136C213.662 23.6136 230.478 41.9196 226.29 65.0249H174.391C176.845 73.1353 184.555 78.8884 193.116 78.9969C199.478 79.0432 205.574 75.8246 209.074 70.5759H224.855C220.032 83.8538 206.938 92.9509 192.669 92.9373ZM211.521 52.7876C209.757 44.0117 201.719 37.5165 192.669 37.5541C183.723 37.6796 175.844 44.1226 174.04 52.7876H211.521Z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M120.697 36.721C111.731 36.721 104.462 43.9077 104.462 52.773V91.3066H89.2225V54.348C89.2225 37.1608 103.314 23.2278 120.697 23.2278C138.08 23.2278 152.172 37.1608 152.172 54.348V91.3066H136.932V52.773C136.932 43.9077 129.663 36.721 120.697 36.721Z"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.2348 67.6948L15.423 91.2588H0L22.4956 14.3056C24.973 5.8306 32.7933 0 41.6829 0C50.5725 0 58.3928 5.8306 60.8703 14.3056L83.3658 91.2588H67.9428L61.131 67.6948C54.8996 69.2318 48.3838 70.0466 41.6829 70.0466C34.982 70.0466 28.4662 69.2318 22.2348 67.6948ZM36.7207 17.5836C37.3614 15.3918 39.3839 13.8839 41.6829 13.8839C43.9819 13.8839 46.0044 15.3918 46.6451 17.5836L57.3548 54.6318C52.3347 55.8327 47.0876 56.47 41.6829 56.47C36.2783 56.47 31.0311 55.8327 26.011 54.6318L36.7207 17.5836Z"
                />
              </svg>
            </div>
            <div
              className="col-span-2 flex items-center justify-center py-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <svg
                className="max-w-full fill-gray-500"
                width="100"
                height="30"
                viewBox="0 0 100 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.4818 0.136884C58.5588 0.0498408 58.6694 0 58.7856 0H62.2153C62.3143 0 62.4099 0.0362174 62.4841 0.101826C62.6519 0.250267 62.6676 0.50662 62.5191 0.674408L56.245 7.76631L62.4591 14.757C62.5251 14.8312 62.5615 14.9271 62.5615 15.0265C62.5615 15.2505 62.3799 15.4321 62.1559 15.4321H58.7185C58.6027 15.4321 58.4923 15.3826 58.4154 15.296L53.9845 10.3117L49.5568 15.2959C49.4798 15.3825 49.3694 15.4321 49.2535 15.4321H45.817C45.7177 15.4321 45.6219 15.3957 45.5476 15.3297C45.3801 15.1809 45.365 14.9246 45.5138 14.7571L51.7242 7.76653L45.4303 0.674888C45.3645 0.600666 45.3281 0.504871 45.3281 0.405634C45.3281 0.181608 45.5097 0 45.7337 0H49.1687C49.2846 0 49.3951 0.0496452 49.4721 0.136392L53.9845 5.22118L58.4818 0.136884ZM99.6537 14.9251C99.6537 14.8255 99.6171 14.7294 99.5508 14.655L95.2717 9.8589C98.7237 8.86049 99.0433 6.12536 99.0433 5.16053C99.0433 2.02985 96.4034 0.00682276 92.3176 0.00682276L84.3712 0.00676699C84.1471 0.00676566 83.9655 0.188373 83.9655 0.412398V0.412407L83.9658 14.9251C83.9658 15.1491 84.1474 15.3307 84.3714 15.3307L86.9084 15.3307C87.1325 15.3307 87.3141 15.1491 87.3141 14.9251L87.3143 10.2298H91.2395L95.6696 15.1951C95.7466 15.2814 95.8567 15.3307 95.9723 15.3307H99.2481C99.4721 15.3307 99.6537 15.1491 99.6537 14.9251ZM77.4399 0.416316V8.79941C77.4399 11.0908 75.7944 12.405 72.8107 12.405C69.7529 12.405 68.2004 11.2258 68.2004 8.79941V0.416316C68.2004 0.19229 68.0188 0.0106818 67.7948 0.0106818H65.2258C65.0018 0.0106818 64.8202 0.19229 64.8202 0.416316V8.79941C64.8202 13.1084 67.9226 15.7853 72.8107 15.7853C77.7164 15.7853 80.8202 13.0432 80.8202 8.79941V0.416316C80.8202 0.19229 80.6386 0.0106818 80.4145 0.0106818H77.8455C77.6215 0.0106818 77.4399 0.19229 77.4399 0.416316ZM32.3868 0.000112676C32.2375 0.000112676 32.1003 0.0820823 32.0296 0.213516L24.1611 14.8344C24.0549 15.0316 24.1288 15.2776 24.326 15.3838C24.3851 15.4156 24.4512 15.4322 24.5183 15.4322H27.4359C27.5851 15.4322 27.7223 15.3503 27.793 15.2188L29.5905 11.8791L38.2001 11.8793L39.996 15.2187C40.0668 15.3502 40.204 15.4322 40.3533 15.4322H43.2703C43.4944 15.4322 43.676 15.2506 43.676 15.0266C43.676 14.9595 43.6593 14.8935 43.6276 14.8345L35.7642 0.213613C35.6935 0.0821254 35.5562 0.000112676 35.4069 0.000112676H32.3868ZM31.1675 8.9495L36.6242 8.94973L33.897 3.87885L31.1675 8.9495ZM87.3143 7.31132L87.3235 2.92612H92.1916C95.432 2.92612 95.6838 4.64029 95.6838 5.16551C95.6838 5.84313 95.4838 6.28024 95.015 6.62699C94.5928 6.93925 93.7602 7.31132 92.1916 7.31132H87.3143Z"
                />
                <path d="M24.2211 0.177661L16.2686 14.9337C16.18 15.0981 16.2414 15.3031 16.4058 15.3916C16.455 15.4182 16.5101 15.4321 16.5661 15.4321H19.6485C19.7728 15.4321 19.8871 15.3639 19.9461 15.2545L27.8988 0.498399C27.9874 0.334059 27.9259 0.129035 27.7616 0.0404643C27.7123 0.0139043 27.6572 0 27.6012 0L24.5186 0C24.3943 0 24.28 0.0682304 24.2211 0.177661Z" />
                <path d="M16.1085 0.177661L8.15601 14.9337C8.06744 15.0981 8.12886 15.3031 8.2932 15.3916C8.34249 15.4182 8.39759 15.4321 8.45357 15.4321H11.536C11.6603 15.4321 11.7745 15.3639 11.8335 15.2545L19.7862 0.498399C19.8748 0.334059 19.8134 0.129035 19.649 0.0404643C19.5998 0.0139043 19.5447 0 19.4887 0L16.4061 0C16.2818 0 16.1675 0.0682304 16.1085 0.177661Z" />
                <path d="M7.99571 0.177661L0.0432135 14.9337C-0.045355 15.0981 0.0160708 15.3031 0.180412 15.3916C0.229692 15.4182 0.284798 15.4321 0.340779 15.4321H3.42316C3.54747 15.4321 3.66175 15.3639 3.72073 15.2545L11.6734 0.498399C11.762 0.334059 11.7006 0.129035 11.5362 0.0404643C11.487 0.0139043 11.4319 0 11.3759 0L8.29328 0C8.16897 0 8.05469 0.0682304 7.99571 0.177661Z" />
              </svg>
            </div>
            <div
              className="col-span-2 flex items-center justify-center py-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full fill-gray-500"
                width="100"
                height="40"
                viewBox="0 0 163.2 53"
                xmlSpace="preserve"
              >
                <g>
                  <polygon points="95.1,12 104.5,8.5 95.1,4.9 95.1,0 111.2,6.5 111.2,10.5 95.1,17 	" />
                  <path
                    d="M6.2,43C2.8,43,0,41.3,0,37.5v-0.2c0-4.6,4-6.2,8.9-6.2h2.3v-0.9c0-1.9-0.8-3-2.8-3c-1.8,0-2.7,1-2.8,2.4h-5
		c0.4-4.2,3.7-6.2,8.1-6.2c4.5,0,7.8,1.9,7.8,6.6v12.6h-5.1v-2.2C10.4,41.8,8.7,43,6.2,43z M11.2,36.4v-1.8H9.1
		c-2.6,0-3.9,0.7-3.9,2.4v0.2c0,1.3,0.8,2.2,2.6,2.2C9.6,39.3,11.2,38.3,11.2,36.4z M28.4,43c-5.2,0-9-3.2-9-9.6v-0.3
		c0-6.4,4-9.8,9-9.8c4.3,0,7.8,2.2,8.2,7.1h-5c-0.3-1.8-1.3-3-3.1-3c-2.2,0-3.8,1.8-3.8,5.5v0.6c0,3.8,1.4,5.5,3.8,5.5
		c1.8,0,3.1-1.3,3.4-3.4h4.8C36.4,40,33.5,43,28.4,43z M48,43c-5.2,0-9-3.2-9-9.6v-0.3c0-6.4,4-9.8,9-9.8c4.3,0,7.8,2.2,8.2,7.1h-5
		c-0.3-1.8-1.3-3-3.1-3c-2.2,0-3.8,1.8-3.8,5.5v0.6c0,3.8,1.4,5.5,3.8,5.5c1.8,0,3.1-1.3,3.4-3.4h4.8C56,40,53.1,43,48,43z M67.7,43
		c-5.4,0-9.1-3.2-9.1-9.5v-0.4c0-6.3,3.9-9.8,9-9.8c4.7,0,8.6,2.6,8.6,8.9v2.3H63.9c0.2,3.4,1.7,4.7,3.9,4.7c2,0,3.1-1.1,3.5-2.4
		h4.9C75.6,40.3,72.6,43,67.7,43z M64,31H71c-0.1-2.8-1.4-4-3.5-4C65.9,27.1,64.4,28,64,31z M79.4,23.8h5.3v2.8
		c0.9-1.8,2.8-3.2,5.7-3.2c3.4,0,5.7,2.1,5.7,6.6v12.6h-5.3V30.8c0-2.2-0.9-3.2-2.8-3.2c-1.8,0-3.3,1.1-3.3,3.5v11.5h-5.3V23.8z
		 M105.8,18.1v5.7h3.6v3.9h-3.6v8.9c0,1.4,0.6,2.1,1.9,2.1c0.8,0,1.3-0.1,1.8-0.3v4.1c-0.6,0.2-1.7,0.4-3,0.4c-4.1,0-6-1.9-6-5.7
		v-9.5h-2.2v-3.9h2.2v-3.5L105.8,18.1z M129.2,42.6H124v-2.8c-0.9,1.8-2.7,3.2-5.5,3.2c-3.4,0-5.9-2.1-5.9-6.5V23.8h5.3v12
		c0,2.2,0.9,3.2,2.7,3.2c1.8,0,3.3-1.2,3.3-3.5V23.8h5.3V42.6z M133.1,23.8h5.3v3.5c1.1-2.5,2.9-3.7,5.7-3.7v5.2
		c-3.6,0-5.7,1.1-5.7,4.2v9.7h-5.3V23.8z M154.8,43c-5.4,0-9.1-3.2-9.1-9.5v-0.4c0-6.3,3.9-9.8,9-9.8c4.7,0,8.6,2.6,8.6,8.9v2.3
		h-12.2c0.2,3.4,1.7,4.7,3.9,4.7c2,0,3.1-1.1,3.5-2.4h4.9C162.6,40.3,159.7,43,154.8,43z M151,31h7.1c-0.1-2.8-1.4-4-3.5-4
		C153,27.1,151.5,28,151,31z"
                  />
                </g>
              </svg>
            </div>
            <div
              className="col-span-2 flex items-center justify-center py-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <svg
                className="max-w-full fill-gray-500"
                width="140px"
                height="40px"
                viewBox="0 0 125 55"
              >
                <defs>
                  <path
                    d="M5.43419355,5.29179149 C4.53349253,6.19083774 3.74703483,7.16218299 3.07316476,8.1859588 L3.07316476,8.1859588 C2.53561403,9.00111614 2.06925841,9.85214703 1.67630551,10.7258059 L1.67630551,10.7258059 C-1.37735796,17.4998351 -0.125096543,25.7557178 5.43419355,31.3133579 L5.43419355,31.3133579 C12.6088954,38.4902747 24.2815833,38.4902747 31.4557332,31.3133579 L31.4557332,31.3133579 C38.6298831,24.1397525 38.6298831,12.4665007 31.4557332,5.29179149 L31.4557332,5.29179149 C27.8683823,1.70498879 23.1568108,-0.0881366041 18.4452393,-0.0881366041 L18.4452393,-0.0881366041 C13.7331159,-0.0881366041 9.02154446,1.70498879 5.43419355,5.29179149 L5.43419355,5.29179149 Z M16.7310375,22.8322998 C12.3726821,21.063458 8.07724332,19.1671272 4.05665081,16.7073057 L4.05665081,16.7073057 L4.04837231,16.7023386 C3.53952038,16.3938261 3.28509441,15.7955658 3.40430484,15.2122067 L3.40430484,15.2122067 C3.56104448,14.4423052 3.77683744,13.6823379 4.05278751,12.9378239 L4.05278751,12.9378239 C4.61738135,11.414026 5.43198595,9.96252718 6.49825702,8.64789969 L6.49825702,8.64789969 C6.83436421,8.23121466 7.1953069,7.82887904 7.58274079,7.44144475 L7.58274079,7.44144475 C13.5714092,1.45221827 23.31631,1.45221827 29.307186,7.44144475 L29.307186,7.44144475 C30.638921,8.77262925 31.6737338,10.2903562 32.4132799,11.9112886 L32.4132799,11.9112886 C32.9166129,13.0167457 31.8917343,14.2016765 30.727225,13.8561867 L30.727225,13.8561867 C29.7260782,13.5609198 28.7232756,13.2739314 27.7144022,13.0084672 L27.7144022,13.0084672 C25.3875912,12.3942017 23.0309776,11.8792783 20.6809868,11.3395194 L20.6809868,11.3395194 C20.2836187,11.2490077 20.1318462,11.0889565 20.2516085,10.6827576 L20.2516085,10.6827576 C20.4613305,9.97687659 20.6489766,9.26437278 20.8482125,8.55628417 L20.8482125,8.55628417 C21.0535194,7.81894483 20.6831944,7.43371814 19.9265393,7.61418967 L19.9265393,7.61418967 C19.4044418,7.73947113 18.8878632,7.88793242 18.3652138,8.01707718 L18.3652138,8.01707718 C16.3110415,8.52537773 14.2574211,9.02153647 12.2109754,9.54473834 L12.2109754,9.54473834 C11.48909,9.72631367 11.3753985,10.1049176 11.8577593,10.6557145 L11.8577593,10.6557145 C12.329082,11.1954734 12.8384858,11.7010144 13.3324364,12.2192492 L13.3324364,12.2192492 C14.749716,13.7016545 16.1570614,15.1906826 17.5859308,16.6609461 L17.5859308,16.6609461 C18.1179625,17.2067759 18.4656596,17.1377883 18.7145666,16.4236288 L18.7145666,16.4236288 C18.9673369,15.6945679 19.1665728,14.9406716 19.3420771,14.1862233 L19.3420771,14.1862233 C19.4590799,13.6746113 19.7063311,13.5896186 20.1583374,13.7739535 L20.1583374,13.7739535 C24.5166928,15.5422433 28.8126834,17.4391261 32.8332759,19.8989475 L32.8332759,19.8989475 C32.8365873,19.9006032 32.8393468,19.9022589 32.8421063,19.9044665 L32.8421063,19.9044665 C33.3481988,20.2118752 33.6059361,20.8068242 33.4872776,21.3874237 L33.4872776,21.3874237 C33.424361,21.6997995 33.3515102,22.0116234 33.2681733,22.3212397 L33.2681733,22.3212397 C32.9872561,23.3626763 32.595407,24.3809332 32.0920741,25.3555898 L32.0920741,25.3555898 C31.38509,26.7270631 30.456242,28.0151993 29.307186,29.1648085 L29.307186,29.1648085 C28.1763426,30.2951011 26.9091799,31.212912 25.5603359,31.9182411 L25.5603359,31.9182411 C19.7692478,34.9404494 12.4411177,34.0226385 7.58274079,29.1648085 L7.58274079,29.1648085 C6.25100576,27.8330721 5.2156411,26.315897 4.47664681,24.6949647 L4.47664681,24.6949647 C3.97221009,23.5900594 4.99708864,22.4045767 6.16270174,22.7495147 L6.16270174,22.7495147 C7.16329669,23.0447815 8.16665114,23.3317699 9.1755246,23.598338 L9.1755246,23.598338 C11.5023356,24.2120515 13.8583973,24.726423 16.2083881,25.2661819 L16.2083881,25.2661819 C16.6057562,25.3577974 16.7575287,25.5167448 16.6383183,25.9218399 L16.6383183,25.9218399 C16.4291481,26.6288247 16.2409502,27.3407766 16.0395066,28.0483134 L16.0395066,28.0483134 C15.8347517,28.7867565 16.2067324,29.1725351 16.960628,28.9920636 L16.960628,28.9920636 C17.4832774,28.8662302 18.0020635,28.7183208 18.524161,28.589176 L18.524161,28.589176 C20.5766777,28.0797717 22.6302981,27.583613 24.6783995,27.0615149 L24.6783995,27.0615149 C25.3991811,26.8793877 25.5145282,26.5018876 25.0321675,25.9499869 L25.0321675,25.9499869 C24.5602929,25.410228 24.0514409,24.9052388 23.5574903,24.3847965 L23.5574903,24.3847965 C22.1396589,22.9045988 20.7306578,21.4128111 19.303444,19.9442034 L19.303444,19.9442034 C18.7725161,19.3972698 18.4242671,19.4673612 18.1748083,20.1815207 L18.1748083,20.1815207 C17.9231418,20.9116853 17.722802,21.6655817 17.5478497,22.419478 L17.5478497,22.419478 C17.4672723,22.7704869 17.3254339,22.9217077 17.0980511,22.9217077 L17.0980511,22.9217077 C16.9942939,22.9217077 16.8723239,22.8902493 16.7310375,22.8322998 L16.7310375,22.8322998 Z"
                    id="path-1"
                  />
                </defs>
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    id="Artboard"
                    transform="translate(-121.000000, -84.000000)"
                  >
                    <g id="Group" transform="translate(121.000000, 84.000000)">
                      {/* <path
                        d="M187.930217,38.4976087 C188.726522,38.4976087 189.32913,37.8734783 189.32913,37.0986957 C189.32913,36.323913 188.726522,35.6997826 187.930217,35.6997826 C187.155435,35.6997826 186.531304,36.323913 186.531304,37.0986957 C186.531304,37.8734783 187.155435,38.4976087 187.930217,38.4976087 Z M202.07,38.2608696 L197.959348,32.7082609 L201.833261,27.5 L199.638043,27.5 L196.861739,31.2447826 L194.085435,27.5 L191.868696,27.5 L195.76413,32.7297826 L191.631957,38.2608696 L193.827174,38.2608696 L196.861739,34.1932609 L199.874783,38.2608696 L202.07,38.2608696 Z M212.077609,27.5 L208.978478,35.9365217 L205.319783,27.5 L203.318261,27.5 L208.01,38.2178261 L207.816304,38.6267391 C207.256739,40.0471739 206.352826,40.9295652 204.91087,40.8219565 L204.91087,42.5652174 C207.106087,42.7158696 208.784783,41.3384783 209.688696,38.9280435 L214.07913,27.5 L212.077609,27.5 Z M218.340435,36.4745652 L223.85,28.7482609 L223.85,27.5 L215.994565,27.5 L215.994565,29.2863043 L221.267391,29.2863043 L215.779348,37.0126087 L215.779348,38.2608696 L224.065217,38.2608696 L224.065217,36.4745652 L218.340435,36.4745652 Z"
                        id="Combined-Shape"
                        fill="#cccccc96"
                      /> */}
                      <g
                        id="Group-13"
                        transform="translate(-0.000000, 0.000000)"
                      >
                        {/* <g
                          id="Group-10"
                          transform="translate(67.362625, 7.823724)"
                          fill="#cccccc96"
                        >
                          <path
                            d="M108.564592,20.5331273 C108.564592,17.4797287 106.360645,15.4001465 103.23064,15.4001465 C100.100635,15.4001465 97.8966876,17.4797287 97.8966876,20.5331273 C97.8966876,23.5865259 100.100635,25.6661081 103.23064,25.6661081 C106.360645,25.6661081 108.564592,23.5865259 108.564592,20.5331273 L108.564592,20.5331273 Z M115.000518,9.91245769 L115.000518,30.9325433 C115.000518,38.3673632 109.225276,41.5090625 103.363076,41.5090625 C98.7782664,41.5090625 94.9430984,39.7826832 92.9155669,36.1538248 L98.5578717,32.8796745 C99.3954716,34.4284489 100.673861,35.6676692 103.582971,35.6676692 C106.668997,35.6676692 108.564592,34.0747444 108.564592,30.9325433 L108.564592,28.8966098 C107.109787,30.7117915 104.993298,31.7729053 102.128666,31.7729053 C95.8696558,31.7729053 91.2843461,26.6399245 91.2843461,20.5331273 C91.2843461,14.4263301 95.8696558,9.29334927 102.128666,9.29334927 C104.993298,9.29334927 107.109787,10.3549647 108.564592,12.169143 L108.564592,9.91245769 L115.000518,9.91245769 Z M87.8484373,18.4530434 L87.8484373,32.0388108 L81.2365956,32.0388108 L81.2365956,19.4268598 C81.2365956,16.6830154 79.516917,15.4001465 77.4014276,15.4001465 C74.9765858,15.4001465 73.3018858,16.8154665 73.3018858,19.9576675 L73.3018858,32.0388108 L66.6895443,32.0388108 L66.6895443,9.91245769 L73.3018858,9.91245769 L73.3018858,11.9925416 C74.4913176,10.3549647 76.6957646,9.29334927 79.6053748,9.29334927 C84.0572483,9.29334927 87.8484373,12.4791989 87.8484373,18.4530434 M55.2299682,32.0391118 L61.8418099,32.0391118 L61.8418099,9.91225701 L55.2299682,9.91225701 L55.2299682,32.0391118 Z M54.5677845,3.98256295 C54.5677845,1.81367663 56.3754211,0 58.5358891,0 C60.6958573,0 62.5029941,1.81367663 62.5029941,3.98256295 C62.5029941,6.15094756 60.6958573,7.96512589 58.5358891,7.96512589 C56.3754211,7.96512589 54.5677845,6.15094756 54.5677845,3.98256295 L54.5677845,3.98256295 Z M18.6465931,25.4010052 C18.6465931,30.4898357 14.2386986,32.6582203 9.47747288,32.6582203 C5.06907865,32.6582203 1.7191788,30.976493 0,27.3922867 L5.73026282,24.1176346 C6.303489,25.7993619 7.5373996,26.7290279 9.47747288,26.7290279 C11.0647147,26.7290279 11.8578359,26.2418689 11.8578359,25.3568549 C11.8578359,22.9225647 1.0145154,24.206437 1.0145154,16.5503636 C1.0145154,11.7269371 5.06907865,9.29314859 9.65388861,9.29314859 C13.2241832,9.29314859 16.3981671,10.8860734 18.2497826,14.0277727 L12.6074778,17.0811713 C11.9902726,15.9302518 11.1081939,15.1340402 9.65388861,15.1340402 C8.50743624,15.1340402 7.80277284,15.5765472 7.80277284,16.3727588 C7.80277284,18.8958514 18.6465931,17.2141241 18.6465931,25.4010052 M52.5874305,9.91220684 L45.5347993,32.0390617 L39.3627475,32.0390617 L35.836432,20.2238239 L32.3096166,32.0390617 L26.1385644,32.0390617 L19.0854334,9.91220684 L26.1385644,9.91220684 L29.3125482,21.7720967 L32.7509058,9.91220684 L38.9214583,9.91220684 L42.3603157,21.7720967 L45.5347993,9.91220684 L52.5874305,9.91220684 Z"
                            id="Combined-Shape"
                          />
                        </g> */}
                        <g id="Group-4">
                          <circle id="Oval" cx="27.5" cy="27.5" r="27.5" />
                          <g
                            id="Group-5"
                            transform="translate(9.166667, 9.166667)"
                          >
                            <mask id="mask-2" fill="white">
                              <use xlinkHref="#path-1" />
                            </mask>
                            <g id="Clip-4" />
                            <polygon
                              id="Fill-3"
                              fill="#cccccc96"
                              mask="url(#mask-2)"
                              points="-1.43106966 38.4759253 38.912872 38.4759253 38.912872 -2.46130965 -1.43106966 -2.46130965"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              className="col-span-2 col-start-2 flex items-center justify-center py-2 md:col-auto"
              data-aos="zoom-out"
              data-aos-delay="400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full fill-gray-500"
                id="svg2"
                viewBox="0 0 500.00001 60.190987"
                height="17"
                width="141"
              >
                <defs id="defs4">
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4152">
                    <path
                      d="m 346.276,782.143 c 0,-33.844 27.436,-61.281 61.281,-61.281 l 0,0 c 33.845,0 61.282,27.437 61.282,61.281 l 0,0 c 0,33.846 -27.437,61.282 -61.282,61.282 l 0,0 c -33.845,0 -61.281,-27.436 -61.281,-61.282"
                      id="path4154"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4164">
                    <path
                      d="m 483.921,782.143 c 0,-33.844 27.436,-61.281 61.282,-61.281 l 0,0 c 33.844,0 61.281,27.437 61.281,61.281 l 0,0 c 0,33.846 -27.437,61.282 -61.281,61.282 l 0,0 c -33.846,0 -61.282,-27.436 -61.282,-61.282"
                      id="path4166"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4240">
                    <path
                      d="m 71.575,242.569 c 0,-33.845 27.437,-61.282 61.281,-61.282 l 0,0 c 33.845,0 61.282,27.437 61.282,61.282 l 0,0 c 0,33.844 -27.437,61.281 -61.282,61.281 l 0,0 c -33.844,0 -61.281,-27.437 -61.281,-61.281"
                      id="path4242"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4252">
                    <path
                      d="m 209.338,242.852 c 0,-33.844 27.438,-61.282 61.282,-61.282 l 0,0 c 33.845,0 61.282,27.438 61.282,61.282 l 0,0 c 0,33.845 -27.437,61.281 -61.282,61.281 l 0,0 c -33.844,0 -61.282,-27.436 -61.282,-61.281"
                      id="path4254"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4264">
                    <path
                      d="m 346.984,242.852 c 0,-33.844 27.437,-61.282 61.282,-61.282 l 0,0 c 33.845,0 61.281,27.438 61.281,61.282 l 0,0 c 0,33.845 -27.436,61.281 -61.281,61.281 l 0,0 c -33.845,0 -61.282,-27.436 -61.282,-61.281"
                      id="path4266"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4276">
                    <path
                      d="m 484.63,242.852 c 0,-33.844 27.437,-61.282 61.281,-61.282 l 0,0 c 33.846,0 61.282,27.438 61.282,61.282 l 0,0 c 0,33.845 -27.436,61.281 -61.282,61.281 l 0,0 c -33.844,0 -61.281,-27.436 -61.281,-61.281"
                      id="path4278"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4350">
                    <path
                      d="m 484.63,455.575 c 0,-33.845 27.437,-61.281 61.281,-61.281 l 0,0 c 33.846,0 61.282,27.436 61.282,61.281 l 0,0 c 0,33.845 -27.436,61.282 -61.282,61.282 l 0,0 c -33.844,0 -61.281,-27.437 -61.281,-61.282"
                      id="path4352"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4362">
                    <path
                      d="m 29.173,29.173 623.622,0 0,870.236 -623.622,0 0,-870.236 z"
                      id="path4364"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4374">
                    <path
                      d="m 209.338,455.593 c 0,-33.845 27.438,-61.281 61.282,-61.281 l 0,0 c 33.845,0 61.282,27.436 61.282,61.281 l 0,0 c 0,33.845 -27.437,61.282 -61.282,61.282 l 0,0 c -33.844,0 -61.282,-27.437 -61.282,-61.282"
                      id="path4376"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4400">
                    <path
                      d="m 71.622,455.593 c 0,-33.845 27.437,-61.281 61.282,-61.281 l 0,0 c 33.844,0 61.281,27.436 61.281,61.281 l 0,0 c 0,33.845 -27.437,61.282 -61.281,61.282 l 0,0 c -33.845,0 -61.282,-27.437 -61.282,-61.282"
                      id="path4402"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4448">
                    <path
                      d="m 346.961,455.593 c 0,-33.845 27.436,-61.281 61.281,-61.281 l 0,0 c 33.845,0 61.282,27.436 61.282,61.281 l 0,0 c 0,33.845 -27.437,61.282 -61.282,61.282 l 0,0 c -33.845,0 -61.281,-27.437 -61.281,-61.282"
                      id="path4450"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4478">
                    <path
                      d="m 29.173,29.173 623.622,0 0,870.236 -623.622,0 0,-870.236 z"
                      id="path4480"
                    />
                  </clipPath>
                  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath4542">
                    <path
                      d="m 0,0 681.969,0 0,928.583 L 0,928.583 0,0 Z"
                      id="path4544"
                    />
                  </clipPath>
                </defs>
                <g transform="translate(-126.87031,-865.73619)" id="layer1">
                  <g
                    transform="matrix(4.0156772,0,0,-4.0156772,262.37532,901.8813)"
                    id="g4534"
                  >
                    <path
                      id="path4536"
                      d="m 0,0 c 0,-1.34 0,-2.726 -0.777,-3.722 -0.771,-0.999 -2.277,-1.454 -3.349,-1.454 -1.073,0 -2.577,0.455 -3.35,1.455 C -8.252,-2.726 -8.252,-1.34 -8.252,0 l 0,8.539 -0.599,0 0,-8.808 c 0,-1.433 0,-2.67 0.938,-3.827 0.89,-1.013 2.307,-1.62 3.787,-1.62 1.479,0 2.895,0.608 3.791,1.624 0.933,1.153 0.933,2.39 0.933,3.823 l 0,8.808 L 0,8.539 0,0 Z m -25.465,1.282 5.674,0 -0.011,-0.168 c -0.107,-1.788 -0.954,-3.489 -2.323,-4.668 -1.297,-1.047 -2.836,-1.622 -4.337,-1.622 -3.685,0 -6.683,2.998 -6.683,6.683 0,3.559 3.122,6.682 6.683,6.682 2.227,0 4.193,-1.057 5.556,-2.98 l 0.441,0.442 c -1.557,2.015 -3.608,3.079 -5.942,3.079 -4.045,0 -7.337,-3.266 -7.337,-7.28 0,-3.884 3.308,-7.166 7.223,-7.166 2.029,0 4.025,0.851 5.339,2.276 1.291,1.354 2,3.09 2,4.89 l 0,0.374 -6.283,0 0,-0.542 z m 10.806,10e-4 c 2.379,0 3.858,1.379 3.858,3.6 0,0.906 -0.24,2.155 -1.382,2.96 -0.959,0.696 -2.146,0.696 -3.19,0.696 l -1.634,0 0,-14.064 0.598,0 0,6.809 0.7,0 4.692,-6.809 0.663,0 -4.714,6.814 0.409,-0.006 z m -1.75,0.541 0,6.174 1.202,10e-4 c 0.746,0 1.53,-0.026 2.192,-0.34 0.995,-0.443 1.616,-1.494 1.616,-2.739 0,-0.972 -0.39,-1.844 -1.071,-2.393 -0.748,-0.649 -1.664,-0.703 -2.617,-0.703 l -1.322,0 z M 35.392,6.961 C 34.624,7.647 33.708,8.176 32.714,8.525 L 30.035,5.846 c 1.171,-0.017 2.237,-0.489 3.023,-1.218 l 2.334,2.333 z M 18.21,8.189 c 3.325,0 6.17,-2.566 6.63,-5.778 l 0.519,0.52 c -0.69,3.261 -3.684,5.799 -7.149,5.799 -3.957,0 -7.301,-3.308 -7.301,-7.223 0,-3.456 2.606,-6.435 5.94,-7.087 l 0.472,0.473 c -3.23,0.45 -5.812,3.291 -5.812,6.614 0,3.622 3.068,6.682 6.701,6.682 m 53.524,-6.217 0,0.038 c 1.137,0.577 1.547,1.604 1.547,2.871 0,2.684 -1.678,3.653 -4.176,3.653 l -5.22,0 0,-14.056 5.631,0 c 2.573,0 5.089,0.969 5.089,3.915 0,1.957 -0.858,3.318 -2.871,3.579 m -4.195,3.766 0.262,0 c 0.986,0 2.124,-0.075 2.124,-1.36 0,-1.195 -1.007,-1.362 -1.976,-1.362 l -0.41,0 0,2.722 z m 0.466,-8.464 -0.466,0 0,3.02 0.373,0 c 1.193,0 3.002,0.169 3.002,-1.529 0,-1.546 -1.828,-1.491 -2.909,-1.491 M 82.992,9.001 c -4.045,0 -7.773,-2.983 -7.773,-7.235 0,-4.547 3.262,-7.754 7.773,-7.754 4.513,0 7.776,3.207 7.776,7.754 0,4.252 -3.728,7.235 -7.776,7.235 m 0,-11.448 c -2.18,0 -3.97,1.772 -3.97,4.195 0,1.939 1.79,3.71 3.97,3.71 2.182,0 3.972,-1.771 3.972,-3.71 0,-2.423 -1.79,-4.195 -3.972,-4.195 M 54.812,9.001 c -4.046,0 -7.775,-2.983 -7.775,-7.235 0,-4.547 3.263,-7.754 7.775,-7.754 4.512,0 7.775,3.207 7.775,7.754 0,4.252 -3.729,7.235 -7.775,7.235 m 0,-11.448 c -2.181,0 -3.971,1.772 -3.971,4.195 0,1.939 1.79,3.71 3.971,3.71 2.18,0 3.971,-1.771 3.971,-3.71 0,-2.423 -1.791,-4.195 -3.971,-4.195 M 42.74,8.534 l -3.653,0 0,-14.056 8.034,0 0,3.095 -4.381,0 0,10.961 z m -11.984,-6.208 0,-2.871 3.131,0 c -0.748,-1.486 -2.227,-2.439 -3.916,-2.439 -2.332,0 -4.26,1.816 -4.422,4.345 l -2.757,-2.758 c 1.137,-2.8 3.808,-4.591 7.179,-4.591 4.512,0 7.775,3.207 7.775,7.754 0,0.19 -0.017,0.375 -0.031,0.56 l -6.959,0 z M 8.593,7.738 C 7.724,8.477 6.63,8.539 5.586,8.539 l -2.378,0 0,-14.064 0.598,0 0,6.829 1.78,0 c 0.975,0 2.208,0.099 3.101,0.876 0.708,0.59 1.146,1.633 1.146,2.722 0,1.151 -0.44,2.158 -1.24,2.836 M 8.249,2.667 C 7.441,1.943 6.511,1.843 5.625,1.843 l -1.819,0 0,6.155 1.666,0 c 0.812,0 1.822,0 2.615,-0.606 C 8.806,6.863 9.237,5.946 9.237,4.94 9.237,4.038 8.895,3.252 8.249,2.667"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

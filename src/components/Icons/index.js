import React from 'react';
//import './style.css';


let Icons = (props) => {

  // === Иконки для Sidebar: ===
  let heartIcon = <svg id="heart-icon" width="18" height="18" >
    <g clip-path="url(#clip0)">
      <path d="M18 5.951c0 2.462-1.753 4.525-3.071 5.863a.701.701 0 01-.995.007.703.703 0 01-.007-.994c1.82-1.846 2.667-3.396 2.667-4.876 0-2.18-1.417-3.701-3.446-3.701-1.319 0-2.293.496-2.894 1.475A4.09 4.09 0 009.7 5.318.702.702 0 019 5.966a.704.704 0 01-.701-.65c0-.006-.075-.814-.553-1.591-.601-.979-1.575-1.475-2.894-1.475-2.029 0-3.446 1.522-3.446 3.701 0 .983.373 1.993 1.139 3.084h1.669L5.38 6.652a.703.703 0 011.274.022l1.436 3.22.915-1.809a.703.703 0 01.622-.386h.006c.26 0 .5.145.622.376l.505.96h1.58a.703.703 0 110 1.406h-2.004a.703.703 0 01-.622-.375l-.069-.13-.967 1.912a.703.703 0 01-.627.386h-.017a.703.703 0 01-.625-.416L5.982 8.62l-.698 1.426a.703.703 0 01-.632.394H.703a.703.703 0 110-1.406h.178C.29 7.99 0 6.972 0 5.951c0-1.493.49-2.78 1.418-3.718.884-.896 2.104-1.39 3.434-1.39 2.325 0 3.527 1.197 4.126 2.2L9 3.082l.022-.037c.6-1.004 1.801-2.2 4.126-2.2 1.33 0 2.55.493 3.434 1.389C17.51 3.172 18 4.458 18 5.95zm-6.546 7.153l-.016.014c-.894.784-1.748 1.534-2.438 2.269-.69-.735-1.545-1.485-2.438-2.27-.476-.417-.968-.848-1.446-1.287a.703.703 0 10-.951 1.035c.489.45.987.887 1.47 1.31 1.1.966 2.141 1.879 2.817 2.719l.003.003a.732.732 0 00.05.054v.002a.695.695 0 00.053.047h.001l.001.002a.664.664 0 00.048.035l.003.002.048.029.003.002a.652.652 0 00.048.024l.012.005a.658.658 0 00.04.016.733.733 0 00.056.018.597.597 0 00.056.012l.015.002a.85.85 0 00.045.006l.016.001a.647.647 0 00.048.002h.004a.703.703 0 00.109-.009l.015-.002a.628.628 0 00.101-.026l.011-.005a.633.633 0 00.154-.077.628.628 0 00.048-.035L9.441 17l.002-.002a.717.717 0 00.051-.046l.003-.002a.713.713 0 00.039-.043l.01-.011.002-.003c.676-.84 1.716-1.753 2.818-2.719l.016-.014a.703.703 0 10-.928-1.057z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>;

  let doctorsIcon = <svg id="doctors-icon" width="18" height="18">
    <path d="M11.672 13.148a.703.703 0 00-.703.704 2.745 2.745 0 01-2.742 2.742 2.745 2.745 0 01-2.743-2.742V11.83l2.5-3.627a.714.714 0 00.042-.07 4.54 4.54 0 00.14-.136c.9-.915 1.396-2.195 1.396-3.603v-2.76C9.563.733 8.83 0 7.928 0H6.609a.703.703 0 00-.703.703v.703a.703.703 0 101.407 0h.615c.126 0 .228.103.228.228V4.428c-.015 2.06-1.43 3.552-3.375 3.552-1.955 0-3.375-1.508-3.375-3.585a.724.724 0 00-.003-.065.676.676 0 00.003-.065v-2.63c0-.126.103-.229.229-.229h.58a.703.703 0 001.406-.035V.703A.703.703 0 002.918 0H1.635C.733 0 0 .733 0 1.635v2.63c0 .022.001.043.003.065A.727.727 0 000 4.395c0 1.408.496 2.688 1.396 3.603l.086.085c.018.041.04.082.067.12l2.53 3.671v1.978A4.153 4.153 0 008.226 18a4.153 4.153 0 004.148-4.148.703.703 0 00-.703-.704zm-6.89-3.761c.241 0 .48-.017.714-.051l-.73 1.059-.733-1.064c.245.037.495.056.748.056zm11.812-1.848V2.813A2.816 2.816 0 0013.78 0a2.816 2.816 0 00-2.812 2.813v7.523a.703.703 0 101.406 0V2.812c0-.775.63-1.406 1.406-1.406.776 0 1.406.631 1.406 1.407v4.726a2.113 2.113 0 00-1.406 1.988c0 1.164.946 2.11 2.11 2.11 1.163 0 2.109-.947 2.109-2.11 0-.916-.588-1.698-1.406-1.988zm-.703 2.691a.704.704 0 11.001-1.407.704.704 0 01-.001 1.407z" fill="#fff" />
  </svg>;

  let messagesIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M16.4716 10.778C16.3262 10.4179 15.9162 10.2441 15.5562 10.3896C15.1962 10.5352 15.0224 10.945 15.1679 11.3051L15.9959 13.3535L13.5365 12.2694C13.3585 12.1908 13.1559 12.1896 12.977 12.266C12.1364 12.6245 11.2359 12.8064 10.3007 12.8064C6.53638 12.8064 4.00773 9.85913 4.00773 7.10637C4.00773 3.96332 6.83081 1.40625 10.3007 1.40625C13.7706 1.40625 16.5937 3.96332 16.5937 7.10637C16.5937 7.3515 16.5709 7.64511 16.531 7.9118C16.4738 8.29591 16.7387 8.65379 17.1227 8.71106C17.5068 8.76833 17.8647 8.50342 17.9219 8.11931C17.9722 7.78217 17.9999 7.42236 17.9999 7.10637C17.9999 5.19626 17.1911 3.40411 15.7223 2.05994C14.271 0.731552 12.3457 0 10.3007 0C8.25574 0 6.33038 0.731552 4.87909 2.05994C3.56663 3.26115 2.78166 4.82025 2.62936 6.5013C0.978529 7.59457 -7.80486e-05 9.34634 -7.80486e-05 11.2332C-7.80486e-05 12.4119 0.37126 13.5305 1.07823 14.4929L0.0511457 17.0333C-0.0561083 17.2987 0.0081617 17.6024 0.213606 17.8017C0.347502 17.9315 0.524107 18 0.703184 18C0.798903 18 0.895445 17.9805 0.986632 17.9403L3.94786 16.6349C4.69273 16.9122 5.48018 17.0526 6.29289 17.0526C6.31047 17.0526 6.32777 17.0512 6.34494 17.05C7.52048 17.041 8.66333 16.7318 9.65306 16.1532C10.5397 15.6349 11.269 14.9227 11.7803 14.0819C12.2793 13.9922 12.7673 13.8568 13.2409 13.6758L17.0132 15.3387C17.1044 15.3789 17.2008 15.3984 17.2967 15.3984C17.4757 15.3984 17.6522 15.3299 17.7861 15.2001C17.9917 15.0009 18.0558 14.6971 17.9486 14.4318L16.4716 10.778ZM6.29289 15.6445C6.28328 15.6445 6.27394 15.6455 6.26446 15.6459C5.54651 15.6423 4.85547 15.5012 4.21002 15.2258C4.03108 15.1495 3.82852 15.1507 3.65054 15.2291L2.00397 15.955L2.53515 14.6411C2.63334 14.3981 2.5883 14.1209 2.41829 13.9213C1.75622 13.1446 1.40617 12.215 1.40617 11.2332C1.40617 10.1096 1.87886 9.04504 2.70585 8.23782C2.96335 9.64133 3.68982 10.984 4.78584 12.0388C6.14952 13.3513 7.95347 14.1117 9.90121 14.2033C8.98674 15.1033 7.67813 15.6445 6.29289 15.6445ZM11.3202 7.76953C11.7086 7.76953 12.0234 8.08429 12.0234 8.47266C12.0234 8.86102 11.7086 9.17578 11.3202 9.17578H7.10148C6.71312 9.17578 6.39836 8.86102 6.39836 8.47266C6.39836 8.08429 6.71312 7.76953 7.10148 7.76953H11.3202ZM13.4296 6.36328H7.10148C6.71312 6.36328 6.39836 6.04852 6.39836 5.66016C6.39836 5.27179 6.71312 4.95703 7.10148 4.95703H13.4296C13.818 4.95703 14.1327 5.27179 14.1327 5.66016C14.1327 6.04852 13.818 6.36328 13.4296 6.36328Z" fill="white" />
  </svg>
    ;

  let testIcon = <svg width="18" height="18">
    <defs />
    <path fill="#fff" d="M12.623 13.113h-2.074a.703.703 0 000 1.407h2.074a.703.703 0 100-1.407zM12.623 8.86h-2.074a.703.703 0 000 1.406h2.074a.703.703 0 100-1.407z" />
    <path fill="#fff" d="M15.432 12.375a.703.703 0 00.703-.703v-8.86A2.816 2.816 0 0013.322 0H4.678a2.816 2.816 0 00-2.813 2.813v12.374A2.816 2.816 0 004.678 18h8.644a2.816 2.816 0 002.813-2.813.703.703 0 00-1.407 0c0 .776-.63 1.407-1.406 1.407H4.678c-.776 0-1.407-.631-1.407-1.407V2.813c0-.776.631-1.407 1.407-1.407h8.644c.776 0 1.407.631 1.407 1.407v8.859c0 .388.314.703.703.703z" />
    <path fill="#fff" d="M8.993 2.798a.703.703 0 00-.99.094L6.484 4.73l-.6-.615a.703.703 0 00-1.007.981l.754.775a1.228 1.228 0 001.815-.097l1.641-1.986a.703.703 0 00-.094-.99zM8.993 11.371a.703.703 0 00-.99.095l-1.52 1.839-.6-.613a.703.703 0 10-1.005.983l.755.77a1.228 1.228 0 001.813-.098l1.64-1.986a.703.703 0 00-.093-.99zM12.623 4.535h-2.074a.703.703 0 000 1.406h2.074a.703.703 0 100-1.406zM8.993 7.118a.703.703 0 00-.99.094L6.483 9.05l-.6-.613a.703.703 0 00-1.005.984l.755.77a1.228 1.228 0 001.813-.098l1.64-1.986a.703.703 0 00-.093-.99z" />
  </svg>;


  let bookIcon = <svg width="18" height="18" fill="none">
    <defs />
    <g clip-path="url(#clip0)">
      <path fill="#fff" d="M17.297 7.805A.703.703 0 0018 7.102V1.758a.703.703 0 00-.897-.676c-.815.234-1.853.168-3.167.084-.823-.052-1.755-.111-2.827-.111-.839 0-1.593.37-2.109.955a2.806 2.806 0 00-2.11-.955c-1.07 0-2.003.059-2.826.111-1.314.084-2.352.15-3.167-.084A.703.703 0 000 1.758v11.664c-.002.753.29 1.461.821 1.994a2.794 2.794 0 001.992.826h5.484a.703.703 0 001.406 0h5.485A2.816 2.816 0 0018 13.43v-2.813a.703.703 0 00-1.406 0c0 .776-.631 1.406-1.407 1.406h-5.132c-.12 0-.238.013-.352.036V3.867c0-.775.631-1.406 1.406-1.406 1.027 0 1.936.058 2.738.109 1.049.066 1.938.123 2.747.035v4.497c0 .388.314.703.703.703zm-9 7.031H2.813c-.377 0-.73-.147-.996-.413a1.398 1.398 0 01-.41-.999v-.373c.413.24.893.379 1.406.379h5.132c.194 0 .352.157.352.351v1.055zm0-2.777a1.763 1.763 0 00-.352-.035H2.813c-.776 0-1.407-.631-1.407-1.407V2.605c.809.088 1.698.031 2.747-.035.802-.051 1.711-.109 2.738-.109.775 0 1.406.63 1.406 1.406v8.192zm1.758 1.37h5.133c.512 0 .992-.138 1.406-.378v.379c0 .775-.631 1.406-1.407 1.406H9.704v-1.055c0-.194.158-.351.352-.351z" />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>;

  // === Иконки для Header: ===

  let eyeIcon = <svg width="18" height="18" viewBox="0 0 18 18">
    <path d="M16.41 13.3914C16.3385 13.0097 15.9711 12.7582 15.5894 12.8298C15.2077 12.9013 14.9562 13.2687 15.0277 13.6504C15.0808 13.9335 14.9563 14.1353 14.8774 14.2304C14.7987 14.3253 14.6238 14.4844 14.3367 14.4844H3.66358C3.37653 14.4844 3.20159 14.3253 3.12288 14.2304C3.04399 14.1353 2.9195 13.9335 2.97259 13.6504C3.17203 12.5861 3.57221 11.8861 3.95921 11.2091C4.42921 10.3871 4.91521 9.53694 4.91521 8.22653V7.17184C4.91521 4.95464 6.71743 3.12634 8.93364 3.09417H9.06657C11.2753 3.12627 13.0715 4.95457 13.0715 7.17188V8.22656C13.0715 9.34182 13.4363 10.1093 13.7783 10.741C13.9055 10.9762 14.1474 11.1096 14.3972 11.1096C14.5103 11.1096 14.6249 11.0823 14.7313 11.0247C15.0728 10.8399 15.1998 10.4132 15.015 10.0717C14.6747 9.44304 14.4777 8.93957 14.4777 8.22656V7.17188C14.4777 5.72481 13.9173 4.35807 12.8994 3.32346C12.0272 2.43678 10.9072 1.88346 9.6965 1.73074V0.703125C9.6965 0.314789 9.38171 0 8.99337 0C8.60504 0 8.29025 0.314789 8.29025 0.703125V1.73282C5.60227 2.08157 3.509 4.40089 3.509 7.17188V8.22656C3.509 9.16337 3.16893 9.75818 2.73841 10.5112C2.31428 11.2532 1.83352 12.0941 1.59038 13.3914C1.47433 14.0107 1.63851 14.6438 2.04084 15.1286C2.44278 15.6129 3.03428 15.8906 3.66358 15.8906H6.89757C6.89757 17.0537 7.84383 18 9.00694 18C10.1701 18 11.1163 17.0537 11.1163 15.8906H14.3367C14.966 15.8906 15.5575 15.6129 15.9595 15.1286C16.3618 14.6439 16.526 14.0107 16.41 13.3914ZM9.00694 16.5938C8.61924 16.5938 8.30382 16.2783 8.30382 15.8906H9.71007C9.71007 16.2783 9.39468 16.5938 9.00694 16.5938Z" fill="white" />
  </svg>;

  let notificationIcon = <svg width="18" height="18" viewBox="0 0 18 18" >
    <g clip-path="url(#clip0)">
      <path d="M9.03586 10.371C9.79308 10.371 10.4069 9.75719 10.4069 8.99997C10.4069 8.24275 9.79308 7.62891 9.03586 7.62891C8.27864 7.62891 7.66479 8.24275 7.66479 8.99997C7.66479 9.75719 8.27864 10.371 9.03586 10.371Z" fill="white" />
      <path d="M9.03555 4.99219C6.82569 4.99219 5.02783 6.79005 5.02783 8.99992C5.02783 11.2098 6.82569 13.0076 9.03555 13.0076C11.2454 13.0076 13.0433 11.2098 13.0433 8.99992C13.0433 6.79005 11.2454 4.99219 9.03555 4.99219ZM9.03555 11.6014C7.60107 11.6014 6.43405 10.4344 6.43405 8.99992C6.43405 7.56543 7.60107 6.39841 9.03555 6.39841C10.47 6.39841 11.6371 7.56543 11.6371 8.99992C11.6371 10.4344 10.47 11.6014 9.03555 11.6014Z" fill="white" />
      <path d="M17.5447 7.46517C17.1714 6.89191 16.118 5.42023 14.4034 4.13821C12.6653 2.83866 10.8527 2.17969 9.01579 2.17969C7.18151 2.17969 5.3673 2.83687 3.62354 4.13291C1.9013 5.41295 0.839473 6.8828 0.462878 7.45533C-0.154293 8.39361 -0.154293 9.60612 0.462878 10.5444C0.839473 11.117 1.9013 12.5868 3.62354 13.8669C5.3673 15.1629 7.18148 15.8201 9.01579 15.8201C11.8397 15.8201 14.1106 14.2455 15.5182 12.9246C15.8014 12.6589 15.8156 12.214 15.5499 11.9308C15.2841 11.6476 14.8392 11.6335 14.556 11.8992C13.3334 13.0464 11.3797 14.4139 9.01573 14.4139C5.6019 14.4139 2.77174 11.4959 1.63763 9.77167C1.32924 9.30283 1.32924 8.69701 1.63763 8.22817C2.77174 6.50396 5.6019 3.58598 9.01573 3.58598C12.4294 3.58598 15.2423 6.50677 16.3663 8.2326C16.6698 8.69874 16.6698 9.30111 16.3663 9.76724C16.1544 10.0927 16.2464 10.5282 16.5718 10.7401C16.8972 10.952 17.3328 10.86 17.5447 10.5346C18.1518 9.60229 18.1518 8.39745 17.5447 7.46517Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>;

  let searchIcon = <svg width="18" height="18" viewBox="0 0 18 18">
    <g clip-path="url(#clip0)">
      <path d="M10.6172 0C6.54631 0 3.23438 3.31193 3.23438 7.38281C3.23438 9.17381 3.87542 10.8179 4.94013 12.0977L0.207637 16.798C-0.0678826 17.0717 -0.0693943 17.5168 0.204227 17.7924C0.341688 17.9307 0.522391 18 0.703129 18C0.88225 18 1.06144 17.9319 1.19859 17.7957L5.93754 13.089C7.21224 14.1363 8.84261 14.7656 10.6172 14.7656C11.8837 14.7656 13.1335 14.4393 14.2314 13.8218C14.5699 13.6315 14.6899 13.2028 14.4996 12.8643C14.3092 12.5259 13.8805 12.4057 13.5421 12.5961C12.6542 13.0955 11.6428 13.3594 10.6172 13.3594C7.32172 13.3594 4.64063 10.6783 4.64063 7.38281C4.64063 4.08734 7.32172 1.40625 10.6172 1.40625C13.9127 1.40625 16.5938 4.08734 16.5938 7.38281C16.5938 8.42101 16.3236 9.44328 15.8127 10.3391C15.6203 10.6765 15.7378 11.1059 16.0751 11.2983C16.4124 11.4906 16.8418 11.3732 17.0342 11.0359C17.666 9.92813 18 8.66493 18 7.38281C18 3.31193 14.6881 0 10.6172 0Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>;

  let selectIcon = <svg width="16" height="16" viewBox="0 0 16 16">
    <rect width="16" height="16" rx="5" fill="white" />
    <g clip-path="url(#clip0)">
      <path d="M8.00187 10.1996L4.63147 6.8292L4.63147 6.8292C4.45269 6.65044 4.16285 6.65044 3.98407 6.8292L3.98403 6.82923C3.80533 7.00802 3.80531 7.29782 3.98404 7.4766L3.98406 7.47662L7.67816 11.1707L7.67818 11.1707C7.85695 11.3495 8.14678 11.3495 8.32556 11.1707L8.32557 11.1707L12.0197 7.47662L12.0197 7.47664L12.0215 7.47476C12.1972 7.29287 12.1921 7.00303 12.0102 6.82737L12.0102 6.82737C11.8328 6.65603 11.5515 6.65602 11.3741 6.82738L11.3741 6.82736L11.3723 6.8292L8.00187 10.1996Z" fill="#50CAFF" stroke="#50CAFF" stroke-width="0.3" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="10" height="10" fill="white" transform="translate(3 14) rotate(-90)" />
      </clipPath>
    </defs>
  </svg>;

  const sprite = {
    "heart": heartIcon,
    "doctors": doctorsIcon,
    "messages": messagesIcon,
    "test": testIcon,
    "book": bookIcon,
    "eye": eyeIcon,
    "notifications": notificationIcon,
    "search": searchIcon,
    "select": selectIcon
  }


  return sprite[props.iconKey];
}

export default Icons;
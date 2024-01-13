export type IconNames = keyof typeof ICONS
export interface Icon {
  [key: string]: string
}

export const ICONS: Icon = {
  "brand": `
    <path stroke="none" d="M22.4023 6.00127C21.1133 3.69967 17.1622 3.82131 14.6047 4.50366V4.5015C12.2902 5.07252 9.94079 6.15698 7.91255 7.47801C8.62559 3.79947 11.6654 -1.6917 14.7305 3.73518C15.2359 3.61977 15.7334 3.52884 16.2185 3.46358C13.7311 -1.51488 9.61103 -0.945534 7.46399 4.14473C6.58943 6.17786 6.15623 8.45499 6.03311 10.7372C9.27767 7.86669 13.5211 5.64066 17.9066 5.50415C19.1844 5.52358 20.5387 5.73256 21.1558 6.72105C21.7049 7.75273 21.2038 9.09343 20.5318 10.2268C20.885 10.6122 21.21 11.0002 21.5066 11.391C22.824 9.37967 23.2253 7.42619 22.4023 6.00127Z"/>
    <path stroke="none" d="M12 23.9998C14.64 24.0327 16.507 20.5499 17.1926 17.9944H17.1948C17.8558 15.7046 18.089 13.128 17.9573 10.7117C20.7893 13.1664 24.0293 18.5415 17.797 18.4853C17.6446 18.9808 17.4749 19.457 17.2898 19.9086C22.8449 20.2416 24.409 16.3886 21.0701 11.9867C19.7448 10.2139 17.9875 8.70164 16.0711 7.45523C16.9387 11.6988 16.7489 16.486 14.677 20.3524C14.022 21.4494 13.165 22.518 11.9998 22.5598C10.8312 22.5199 9.91991 21.416 9.27287 20.2687C8.76263 20.3823 8.26407 20.4702 7.77719 20.5326C8.86271 22.6771 10.355 24.001 12 23.9998Z"/>
    <path stroke="none" d="M1.60512 5.98855C0.255838 8.25536 2.33688 11.615 4.20696 13.4879L4.20528 13.4893C5.8572 15.2077 7.97184 16.6988 10.1302 17.7946C6.58704 19.0182 0.310078 19.131 3.4776 13.7638C3.12504 13.3838 2.79744 12.9987 2.49888 12.6122C-0.570003 17.2531 1.9836 20.5352 7.46688 19.849C9.66552 19.5894 11.8546 18.826 13.8931 17.7912C9.78408 16.4179 5.73312 13.8564 3.42264 10.1287C2.80056 9.01281 2.30448 7.73592 2.85216 6.70736C3.4716 5.71599 4.88352 5.4799 6.20112 5.4943C6.35808 4.99573 6.53168 4.52036 6.72192 4.06818C4.3212 3.93478 2.42784 4.56339 1.60512 5.98855Z"/>
    <path stroke="none" d="M12 12.7161C12.3976 12.7161 12.72 12.3938 12.72 11.9963C12.72 11.5988 12.3976 11.2765 12 11.2765C11.6024 11.2765 11.28 11.5988 11.28 11.9963C11.28 12.3938 11.6024 12.7161 12 12.7161Z"/>
  `,
  "menu": `
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 6l16 0" />
    <path d="M4 12l16 0" />
    <path d="M4 18l16 0" />
  `
} as const;
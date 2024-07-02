import * as React from "react";
import { SVGProps } from "react";
import { Svg, Path } from "react-native-svg";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <Svg
    width={300}
    height={312}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M192.48 312H61.36C44 312 29.88 297.878 29.88 280.52V137.283c0-10.62 5.326-20.398 14.251-26.156l81.045-52.288c15.08-9.73 34.569-9.73 49.648 0l81.045 52.288c8.924 5.758 14.252 15.535 14.252 26.156v156.24a9.002 9.002 0 0 1-18.004 0v-156.24c0-4.477-2.246-8.6-6.009-11.028l-81.045-52.288c-9.153-5.904-20.978-5.904-30.128 0l-81.044 52.289a13.07 13.07 0 0 0-6.008 11.027V280.52c0 7.432 6.045 13.477 13.477 13.477h131.12a9.002 9.002 0 0 1 0 18.003Z"
      fill="#7A306C"
    />
    <Path
      d="M290.715 105.413a8.953 8.953 0 0 1-5.027-1.542L165.541 22.798c-9.44-6.371-21.641-6.371-31.084 0L14.312 103.87c-4.122 2.783-9.716 1.694-12.497-2.425A9.003 9.003 0 0 1 4.24 88.948L124.387 7.874c15.559-10.5 35.667-10.498 51.225 0l120.146 81.074a9.002 9.002 0 0 1-5.043 16.465ZM150 261.513c-44.433 0-73.144-21.599-73.144-55.029 0-6.094 1.018-15.142 3.732-23.182-10.802-17.103-1.913-42.063-.817-44.972a8.998 8.998 0 0 1 7.41-5.77c.309-.036 3.134-.342 7.306-.342 10.212 0 23.501 1.738 32.974 9.297 7.252-2.096 14.809-3.156 22.539-3.156 7.73 0 15.286 1.06 22.539 3.156 9.472-7.559 22.762-9.297 32.975-9.297 4.171 0 6.998.307 7.306.342a9 9 0 0 1 7.409 5.77c1.098 2.909 9.983 27.868-.816 44.973 2.714 8.041 3.732 17.088 3.732 23.182-.001 33.429-28.712 55.028-73.145 55.028ZM94.974 150.222c-1.775 7.333-3.126 18.471 1.462 24.361.203.26.478.566.844.937a9.003 9.003 0 0 1 1.7 10.207c-2.388 4.977-4.12 13.706-4.12 20.758 0 11.604 4.954 20.74 14.724 27.153 9.7 6.367 24.054 9.874 40.416 9.874 16.361 0 30.715-3.507 40.415-9.874 9.77-6.413 14.725-15.548 14.725-27.153 0-7.051-1.733-15.78-4.12-20.758a9.007 9.007 0 0 1 1.697-10.204c.371-.377.641-.677.849-.945 4.584-5.883 3.235-17.013 1.458-24.355-11.051.075-19.468 2.694-23.136 7.213a9.003 9.003 0 0 1-10.113 2.769c-6.888-2.55-14.214-3.843-21.775-3.843-7.561 0-14.889 1.294-21.777 3.843a9 9 0 0 1-10.114-2.769c-3.667-4.519-12.084-7.139-23.135-7.214Z"
      fill="#7A306C"
    />
    <Path
      d="M123.72 202.977h-1.235a9.002 9.002 0 1 1 0-18.003h1.235a9 9 0 0 1 9.002 9.001 9.002 9.002 0 0 1-9.002 9.002ZM177.516 202.977h-1.237a9.002 9.002 0 0 1 0-18.003h1.237a9.001 9.001 0 1 1 0 18.003Z"
      fill="#7A306C"
    />
  </Svg>
);

export default Logo;
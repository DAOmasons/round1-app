import { useState } from 'react';
import { Group, Code, Title, ThemeIcon } from '@mantine/core';
import {
  IconHome,
  IconRocket,
  IconPacman,
  IconAward,
  IconFileDescription,
  IconSquareRoundedLetterG,
} from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './DesktoNavStyles.module.css';
import Component from '../../assets/Logo.svg';

console.log(Component);

const data = [
  { link: '', label: 'Home', icon: IconHome },
  { link: '', label: 'Ships', icon: IconRocket },
  { link: '', label: 'Projects', icon: IconAward },
  { link: '', label: 'Game Rules', icon: IconPacman },
  { link: '', label: 'Apply', icon: IconFileDescription },
  { link: '', label: 'About', icon: IconSquareRoundedLetterG },
];

export function DesktopNav() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          {/* <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={classes.logo}
              d="M2.72667 11.6859C3.00927 11.758 3.80684 12.0669 4.06183 11.8905C4.23088 11.7736 4.27358 11.3548 4.33639 11.169C4.53719 10.5753 4.75302 9.97799 5.02476 9.41156C5.80001 7.79551 6.92696 6.25627 8.23899 5.0225C10.7354 2.67492 14.0347 1.1609 17.5291 1.24519C18.8399 1.27682 20.0375 1.60571 21.3084 1.86473L21.7809 0.624152C17.1447 -0.671397 12.2251 0.0127964 8.39569 3.02514C7.20673 3.96036 6.15557 5.09352 5.2687 6.31014C4.06349 7.96347 3.35047 9.76487 2.72667 11.6859ZM23.0931 3.00192L25.3502 5.1729L26.61 6.31014C26.896 5.31036 27.0824 4.24835 27.0824 3.20867C27.0824 3.00435 27.2017 2.4155 27.0789 2.25979C26.9461 2.09129 26.2759 2.25859 26.0851 2.285C25.0898 2.42276 24.0174 2.59895 23.0931 3.00192ZM6.71597 13.185H6.76846L7.97574 11.9961C8.15588 11.8187 8.35887 11.5378 8.60565 11.4511C8.80842 11.3798 9.08316 11.4776 9.28804 11.509C9.81239 11.589 10.3389 11.648 10.8627 11.7335C11.3484 11.8127 12.0004 11.8207 12.4375 12.055C12.7392 12.2167 12.9697 12.5289 13.2201 12.7559C13.9425 13.4108 14.6064 14.1241 15.3245 14.7828C16.3713 15.7431 17.6583 16.7193 18.5264 17.8371H18.6839L19.4712 17.0101C19.7128 18.2364 20.0047 19.4527 20.2382 20.6801C20.3196 21.1079 20.5931 21.75 20.5096 22.1792C20.4227 22.6259 19.7324 23.1137 19.4188 23.4195C19.3096 23.526 19.0693 23.6794 19.0472 23.8412C19.0095 24.118 19.8029 24.6767 19.9962 24.8671H20.0487L22.6732 22.2309L23.7739 21.1453L23.7763 20.5251L23.7251 19.026L23.633 15.0458L23.5864 14.012L22.9357 13.185C24.481 12.4269 25.5344 10.4621 25.9875 8.89467C26.1088 8.47493 26.4221 7.72188 26.2634 7.29223C26.159 7.00968 25.8231 6.77578 25.6127 6.56859C25.1134 6.07685 24.5893 5.61228 24.0905 5.12125C23.6602 4.69776 23.2172 4.292 22.7782 3.87863C22.6036 3.71425 22.4031 3.42471 22.1483 3.38557C21.8018 3.33232 21.2477 3.67497 20.941 3.81764C19.7685 4.36302 18.6643 5.08105 17.8067 6.05165C17.5233 6.37241 17.2083 7.08752 16.8357 7.28069C16.4197 7.49629 15.6317 7.36892 15.167 7.40023L11.5451 7.64944C11.0519 7.68291 10.3245 7.62193 9.86541 7.78865C9.55632 7.9009 9.3474 8.25567 9.12846 8.48112C8.62527 8.99939 8.1214 9.52407 7.60828 10.0319C7.11711 10.5179 6.63659 11.0167 6.17609 11.5309C6.04705 11.6749 5.72951 11.8891 5.72951 12.0995C5.72951 12.4354 6.48501 12.9575 6.71597 13.185ZM24.038 10.5488V10.6005C23.5911 11.0405 23.1727 11.5044 22.7257 11.9444C22.5984 12.0697 22.4009 12.3472 22.2008 12.3472C21.8542 12.3472 21.2438 11.5501 20.9914 11.3153C19.8434 10.2475 18.7508 9.11561 17.6341 8.01592C17.8309 7.74063 18.0819 7.48439 18.3185 7.24054C18.5171 7.036 18.7101 6.83 18.9028 6.62024C19.0315 6.48018 19.2182 6.2258 19.4141 6.17888C19.6455 6.12351 20.17 6.7423 20.2525 6.93039C20.3409 7.13219 20.2478 7.43499 20.2633 7.65408C20.2995 8.16262 20.5446 8.64484 20.9418 8.97401C21.3369 9.30153 21.7955 9.48635 22.3058 9.55167C22.5274 9.58006 22.7773 9.5269 22.9882 9.61097C23.3936 9.77266 23.7342 10.2497 24.038 10.5488ZM22.2533 6.32973C23.6399 6.04948 24.1787 8.13502 22.7782 8.45375C21.3898 8.76973 20.8613 6.61109 22.2533 6.32973ZM29.1821 6.31014C28.9501 6.53847 28.3919 6.91084 28.336 7.24054C28.2846 7.54352 28.7766 8.07359 28.9301 8.32607C29.423 9.13671 29.7645 10.0076 30.0366 10.9106C30.8664 13.6643 30.8664 16.7619 29.9344 19.4912C28.6386 23.2856 25.6691 26.5142 21.8334 27.9387C21.0638 28.2245 20.2778 28.4351 19.4712 28.5888C19.0759 28.6642 18.6066 28.7769 18.2107 28.6514C18.0564 28.6024 17.742 28.4727 17.742 28.2773C17.742 28.084 18.0627 27.9078 18.1695 27.761C18.508 27.2953 18.3398 26.6019 17.739 26.4466C17.0544 26.2697 16.6954 26.8253 16.2693 27.2448L13.4873 29.9844C13.1514 30.3148 12.5097 30.7416 12.4151 31.225C12.3092 31.7657 12.985 32.0944 13.434 31.8898C14.1664 31.5561 14.5273 30.5444 15.272 30.2741C15.5463 30.1745 15.9278 30.2491 16.2168 30.2421C16.7749 30.2286 17.3391 30.1734 17.8965 30.1349C19.3568 30.0341 20.8283 29.7236 22.2008 29.2255C29.2204 26.6782 32.9867 19.3623 31.7759 12.2545C31.5171 10.736 31.0008 9.27349 30.2729 7.91253C29.9846 7.37343 29.669 6.70047 29.1821 6.31014ZM13.9072 8.63622L13.4626 9.45397L12.1226 9.56662L9.28804 9.77341C9.47914 9.44783 9.83308 9.0154 10.1804 8.84438C10.4734 8.70012 10.911 8.81241 11.2302 8.78251C12.1186 8.69924 13.0137 8.63622 13.9072 8.63622ZM17.7895 10.98C19.9978 10.7677 20.4025 14.2364 18.2115 14.4683C17.868 14.5046 17.4804 14.4973 17.1617 14.3557C15.4843 13.6104 16.0301 11.1492 17.7895 10.98ZM12.1226 14.1154V14.1671C13.2509 15.2783 14.4054 16.3635 15.5344 17.4753C16.0638 17.9966 16.6909 18.8168 17.3716 19.1294L17.949 18.5091C17.6507 18.092 17.2116 17.7828 16.8467 17.4236C15.9799 16.5703 15.0889 15.7443 14.2222 14.8908C13.8811 14.5549 13.2826 13.7336 12.8049 13.6163C12.5613 13.5566 12.2725 13.9678 12.1226 14.1154ZM10.4428 15.8212V15.8729C10.6098 16.0373 11.1263 16.3919 11.0921 16.6483C11.0282 17.1276 10.2391 17.3051 10.1863 17.8371C10.1378 18.3252 10.6143 18.641 11.0727 18.4708C11.4698 18.3233 11.8846 17.8596 12.1226 17.527H12.175C12.3312 17.7453 12.8545 18.0816 12.8545 18.354C12.8545 18.869 11.8468 19.1746 11.778 19.7497C11.7219 20.2183 12.2827 20.5396 12.6999 20.3833C13.1335 20.2209 13.6452 19.5991 13.9072 19.2328H13.9597C14.0702 19.386 14.4292 19.6125 14.4292 19.8034C14.4292 20.1975 13.6588 20.5406 13.5242 20.9386C13.3908 21.3332 13.7616 21.7337 14.1697 21.7019C14.4386 21.681 14.6664 21.4789 14.8471 21.2991C15.0764 21.0711 15.2671 20.8157 15.5344 20.6284C15.8397 21.2247 16.844 20.0948 16.7023 19.8014C16.4448 19.2685 15.6998 18.8065 15.272 18.4037C14.5396 17.7141 13.85 16.9806 13.1201 16.2885C12.6103 15.8052 12.0073 15.3601 11.5976 14.7874C11.1263 14.9177 10.7545 15.4698 10.4428 15.8212ZM7.2409 15.7971C6.88956 15.8795 6.67462 16.1893 6.4393 16.4327C6.02774 16.8582 5.59409 17.2594 5.18406 17.6867C4.17152 18.7418 3.08264 19.7622 2.00885 20.7568C1.40516 21.3158 0.667383 21.8744 0.18466 22.541C-0.170416 23.0313 0.195634 23.6075 0.784501 23.5718C1.4934 23.5288 2.30883 22.3839 2.77916 21.9207C3.81267 20.9029 4.84475 19.8455 5.9286 18.8797C6.60269 18.2791 7.51587 17.6012 8.01516 16.8504C8.36952 16.3174 7.85644 15.6527 7.2409 15.7971ZM22.6732 15.8212L22.674 19.1294L22.6942 20.5767L21.9383 21.4038C21.9383 20.4148 21.9498 19.3929 21.8811 18.4057C21.8458 17.8983 21.6824 17.136 21.865 16.6483C21.9841 16.3302 22.3995 16.0111 22.6732 15.8212ZM1.72935 17.5042C1.21152 17.6355 0.188364 18.6282 0.031442 19.1294C-0.154333 19.7227 0.521673 20.1249 1.04695 19.9857C1.54912 19.8527 2.54321 18.882 2.67638 18.4057C2.82792 17.8638 2.2633 17.3688 1.72935 17.5042ZM7.39837 20.0365C7.09111 20.1021 6.87523 20.3683 6.66348 20.5767L5.35123 21.869C4.24286 22.9604 3.12777 24.0482 1.9965 25.1165C1.38167 25.6972 0.62673 26.2544 0.12488 26.9347C-0.221827 27.4046 0.231769 28.0048 0.784501 27.9522C1.08399 27.9237 1.32043 27.6465 1.51939 27.4516L2.77916 26.211C3.8477 25.1592 4.92607 24.0981 6.02392 23.0747C6.69209 22.4518 7.51488 21.8335 8.05068 21.0937C8.39318 20.6207 8.01862 19.904 7.39837 20.0365ZM10.8103 20.864C10.4316 20.9088 10.1696 21.2593 9.9179 21.5072C9.28252 22.1329 8.60744 22.7396 8.01489 23.405C6.09352 25.5624 3.7909 27.4399 1.72935 29.4675C1.2138 29.9746 0.475748 30.4476 0.102645 31.0699C-0.166249 31.5185 0.270154 31.9715 0.732008 31.9947C1.14547 32.0155 1.41108 31.6389 1.67686 31.3803C2.30133 30.7726 2.9448 30.1831 3.56653 29.5709C5.43865 27.7273 7.36303 25.9356 9.23555 24.0917C9.93474 23.4032 10.7398 22.7684 11.3764 22.0241C11.7761 21.5568 11.5001 20.7825 10.8103 20.864ZM16.2693 23.8716C15.5448 24.1439 14.8984 25.1655 14.3264 25.6854C13.0369 26.8573 11.7886 28.0905 10.5478 29.3124C9.98382 29.8679 9.25724 30.3775 8.79315 31.0182C8.4273 31.5234 8.92745 32.0879 9.49799 31.9885C9.80296 31.9354 10.0729 31.6348 10.2854 31.431C10.7003 31.033 11.1212 30.6364 11.5451 30.2475C12.8932 29.0109 14.2314 27.7526 15.5344 26.4695C16.0366 25.975 16.7987 25.4669 17.1612 24.8671C17.4943 24.3157 16.8635 23.6483 16.2693 23.8716ZM11.8076 24.1817C11.1049 24.192 10.2781 25.3911 9.81293 25.8492C8.08009 27.5556 6.18049 29.1487 4.5203 30.9197C4.1321 31.3338 4.25503 31.9205 4.87879 31.9906C5.64842 32.0771 6.44383 30.9222 6.92593 30.4497C8.64628 28.7637 10.596 27.2326 12.1965 25.4336C12.6036 24.976 12.6292 24.1696 11.8076 24.1817Z"
              //   fill="#111111"
            />
          </svg> */}
          <Component />
          <Title order={1} fw={100}>
            Grant Ships
          </Title>
        </Group>
        {links}
      </div>
    </nav>
  );
}

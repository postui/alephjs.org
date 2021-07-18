import { useRouter } from 'aleph/react'
import React from 'react'
import '~/style/header.css'

export default function Header() {
  const { pathname } = useRouter()

  return (
    <header className={pathname === '/docs' || pathname.startsWith('/docs/') ? 'scrollable' : undefined}>
      <div className="wrapper">
        <h1>
          <a href="/">
            <svg viewBox="0 0 60 12.09" style={{ width: 'auto', height: '1em' }} fill="currentColor">
              <title>Aleph.js</title>
              {/* A */}<path d="M5.86,6.11c0,.07,0,.18.06.31s0,.28.08.44a4.06,4.06,0,0,1,.07.56q0,.31,0,.6V9.7H4.54V7.86h-3V9.7H0V8a6.71,6.71,0,0,1,.07-1c0-.35.09-.6.13-.76S.26,6,.27,6L1.41,1.89A1.65,1.65,0,0,1,2,1a1.68,1.68,0,0,1,1-.34,1.68,1.68,0,0,1,1,.34,1.7,1.7,0,0,1,.61.88L5.83,6Zm-4.05.17H4.29L3.21,2.35a.16.16,0,0,0-.16-.12.13.13,0,0,0-.15.12Z" />
              {/* l */}<path d="M13.57,9.31a2.42,2.42,0,0,1-1.51.51A2.49,2.49,0,0,1,9.57,7.33v-5H7.62V.78h3.52V7.33a.89.89,0,0,0,.27.65.86.86,0,0,0,.65.28.93.93,0,0,0,.59-.21A.9.9,0,0,0,13,7.53L14.46,8A2.46,2.46,0,0,1,13.57,9.31Z" />
              {/* e */}<path d="M18.81,2.94a2.38,2.38,0,0,1,1.77.73,2.42,2.42,0,0,1,.73,1.77V7H17.4v.32a1,1,0,0,0,.94.94h.55a.88.88,0,0,0,.58-.21,1,1,0,0,0,.33-.52L21.3,8a2.47,2.47,0,0,1-.89,1.33,2.36,2.36,0,0,1-1.52.52h-.55a2.51,2.51,0,0,1-2.5-2.5V5.44a2.49,2.49,0,0,1,2.5-2.5Zm.94,2.73V5.44a.94.94,0,0,0-.94-.94h-.47a.88.88,0,0,0-.66.28.87.87,0,0,0-.28.66v.23Z" />
              {/* p */}<path d="M28.37,3.66a2.45,2.45,0,0,1,.73,1.78V7.32a2.45,2.45,0,0,1-.73,1.77,2.41,2.41,0,0,1-1.78.73h-.08a2.28,2.28,0,0,1-1.33-.42V12H23.62V3.06h1.56v.3a2.28,2.28,0,0,1,1.33-.42h.08A2.44,2.44,0,0,1,28.37,3.66Zm-.84,1.78a.94.94,0,0,0-.94-.94h-.46a.92.92,0,0,0-.66.28.91.91,0,0,0-.29.66V7.32a1,1,0,0,0,.95.94h.46a.94.94,0,0,0,.94-.94Z" />
              {/* h */}<path d="M36.07,3.66a2.45,2.45,0,0,1,.73,1.78V9.7H35.24V5.44a1,1,0,0,0-.94-.94h-.47a.9.9,0,0,0-.66.28.87.87,0,0,0-.28.66V9.7H31.32V.78h1.57V3.36a2.26,2.26,0,0,1,1.33-.42h.08A2.44,2.44,0,0,1,36.07,3.66Z" />
              {/* . */}<path d="M41,7.48h1.57V9.7H41Z" />
              {/* j */}<path d="M51.17,9v.76a2.32,2.32,0,1,1-4-1.65,2.24,2.24,0,0,1,1.65-.67h.75V4.62H47.07V3.06h4.1V7.45H52.6V9ZM48.86,9a.75.75,0,0,0-.76.76.71.71,0,0,0,.22.53.74.74,0,0,0,.54.23.72.72,0,0,0,.53-.23.71.71,0,0,0,.22-.53V9Zm.75-9h1.56V2.23H49.61Z" />
              {/* s */}<path d="M56,7.81a.56.56,0,0,0,.17.32.53.53,0,0,0,.34.13h1.41a.51.51,0,0,0,.51-.51c0-.34-.22-.53-.67-.56l-1.11-.12a2.21,2.21,0,0,1-1.45-.66A1.9,1.9,0,0,1,54.65,5a2,2,0,0,1,.6-1.47,2,2,0,0,1,1.46-.6h1.18a2,2,0,0,1,1.27.43,2,2,0,0,1,.74,1.12l-1.5.44a.53.53,0,0,0-.17-.31.52.52,0,0,0-.34-.12H56.71a.49.49,0,0,0-.36.15.48.48,0,0,0-.14.36c0,.3.2.47.63.51L58,5.64a2.22,2.22,0,0,1,1.42.68A2,2,0,0,1,60,7.75a2.08,2.08,0,0,1-2.07,2.07H56.52a2,2,0,0,1-1.27-.44,2.05,2.05,0,0,1-.74-1.11Z" />
            </svg>
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a href="https://deno.land/x/aleph" className="icon">
                <svg viewBox="0 0 1024 1024" style={{ width: '1em', height: '1em' }} fill="currentColor">
                  <title>Deno</title>
                  <path d="M471.704 0.285c-2.393 0.252-10.074 1.133-17 1.763-98.473 10.326-195.435 52.007-274.515 118.243-14.607 12.088-47.851 45.333-59.94 59.94-65.481 78.2-103.761 165.969-117.866 269.856-3.148 23.044-3.148 100.866 0 123.91 14.103 103.887 52.385 191.657 117.866 269.856 12.088 14.607 45.333 47.851 59.94 59.94 78.2 65.481 165.969 103.761 269.856 117.866 23.044 3.148 100.866 3.148 123.91 0 103.887-14.103 191.657-52.385 269.856-117.866 14.607-12.088 47.851-45.333 59.94-59.94 65.481-78.2 103.761-165.969 117.866-269.856 3.148-23.044 3.148-100.866 0-123.91-14.103-103.887-52.385-191.657-117.866-269.856-12.088-14.607-45.333-47.851-59.94-59.94-77.948-65.229-166.598-104.013-269.1-117.74-11.082-1.511-27.2-2.141-57.044-2.393-22.792-0.252-43.57-0.126-45.962 0.126zM478 54.685c0 14.733 1.007 46.718 2.393 77.066 0.756 14.859 1.637 36.14 2.015 47.222 1.385 39.288 5.541 142.421 6.171 151.613l0.63 9.193-5.667-0.63c-3.148-0.252-6.045-1.007-6.548-1.385-0.378-0.504-1.259-9.193-1.763-19.392-2.267-44.829-9.697-218.731-10.452-244.167l-0.756-27.955 3.526-0.504c1.889-0.252 5.037-0.63 7.052-0.756l3.4-0.126zM598.51 51.663c0.126 0.126 0.504 38.155 0.882 84.495 0.504 46.466 1.133 88.147 1.511 92.68 0.378 4.659 0.252 8.689-0.378 8.941-0.504 0.378-3.652 0.378-6.8 0l-5.793-0.504-0.882-36.644c-0.504-20.274-1.133-42.688-1.385-49.992-1.007-22.289-1.889-97.97-1.133-99.859 0.504-1.385 1.889-1.511 7.178-0.63 3.652 0.756 6.674 1.385 6.8 1.511zM307.247 93.847c0.756 1.133 6.674 70.518 13.977 161.309 2.393 30.852 4.785 59.058 5.163 62.584 0.63 6.422 0.504 6.674-3.526 9.193-2.267 1.385-4.533 2.519-5.037 2.519-0.378 0-1.133-3.274-1.511-7.304-1.763-16.37-8.563-95.451-13.348-152.62-2.77-33.622-5.289-63.718-5.667-66.992-0.63-5.541-0.504-6.045 2.77-7.808 4.030-2.141 6.297-2.519 7.178-0.882zM653.917 119.158c3.526 1.259 3.904 1.889 4.659 9.067 1.259 12.592 0.882 72.785-0.504 72.785-3.652 0-11.208-4.282-11.836-6.674-0.378-1.511-0.756-19.392-0.756-39.666 0-40.925-0.504-38.533 8.437-35.51zM421.334 125.077c0 3.4 0.882 22.163 1.889 41.933s2.141 44.829 2.645 55.659c0.882 21.911 1.133 21.155-7.304 21.659-4.156 0.126-4.156 0.126-4.408-6.171-0.252-3.526-0.882-14.481-1.637-24.555-0.63-10.074-2.141-31.859-3.148-48.481s-2.267-33.119-2.645-36.644c-0.756-6.297-0.63-6.548 2.77-7.808 2.015-0.756 5.541-1.385 7.808-1.385 4.030-0.126 4.030-0.126 4.030 5.793zM770.649 142.328l4.282 1.763 0.882 16.874c0.378 9.193 0.63 29.089 0.378 44.074l-0.378 27.452-5.289-2.645-5.289-2.519-0.378-41.807c-0.252-23.044-0.126-42.562 0.126-43.444 0.504-1.889 0.504-1.889 5.667 0.252zM540.711 158.824c0.756 0.756 2.519 61.829 2.645 92.806l0.126 18.637-5.919-0.882c-3.4-0.378-6.171-0.756-6.297-0.882-0.378-0.252-4.156-93.562-4.156-102.629v-9.319l6.422 0.756c3.652 0.504 6.8 1.133 7.178 1.511zM830.715 167.765c1.511 1.763 1.763 29.341 2.141 181.457 0.378 174.657 0.378 179.19-1.889 179.19-1.385 0-3.274-0.756-4.408-1.637-1.889-1.385-2.141-16.622-2.77-165.843-0.504-90.414-1.133-172.517-1.511-182.465l-0.756-18.133 3.652 2.645c2.141 1.511 4.533 3.652 5.541 4.785zM717.761 193.58c0.63 0.504 1.259 7.682 1.385 15.866 0.63 27.83 0.756 198.457 0.126 198.96-0.252 0.252-2.519-0.378-5.037-1.385l-4.533-1.889v-214.198l3.526 0.756c1.889 0.504 3.904 1.259 4.533 1.889zM370.209 200.632c0.378 3.4 1.007 11.082 1.385 17.377 0.378 6.171 1.259 20.274 2.015 31.23 1.511 22.163 1.259 23.548-5.919 23.548-3.778 0-4.282-0.378-4.785-4.156-1.259-7.43-5.667-69.384-5.037-70.392 0.63-0.882 7.178-3.148 10.2-3.4 0.756-0.126 1.763 2.519 2.141 5.793zM161.93 232.742c1.385 13.348 4.156 41.303 6.171 62.081 2.141 20.777 3.904 38.407 3.904 39.162 0 1.511-9.697 6.297-10.704 5.289-0.63-0.63-13.222-112.073-13.222-117.11 0-3.022 9.697-15.74 10.956-14.355 0.378 0.252 1.637 11.46 2.896 24.933zM655.68 245.965l3.652 2.141 0.126 27.2c0.126 14.859 0.378 31.482 0.378 36.895 0.252 11.334-1.133 13.222-7.934 10.83l-3.904-1.385v-10.83c0-6.045-0.378-23.548-0.882-39.036l-0.756-27.955h2.896c1.511 0 4.408 1.007 6.422 2.141zM217.211 294.823c2.267 24.178 5.919 64.977 8.311 90.666l4.282 46.592-4.911 4.911-4.785 4.911-0.882-9.948c-0.504-5.541-3.022-31.23-5.667-57.17s-6.422-63.592-8.311-83.614l-3.526-36.266 4.911-4.533c4.408-4.156 4.911-4.282 5.793-2.015 0.504 1.259 2.645 22.163 4.785 46.466zM122.893 310.060c2.77 24.807 10.074 90.792 16.37 146.577s12.214 109.554 13.348 119.629c1.007 10.074 2.77 25.311 3.778 34 1.763 14.733 1.763 15.74-0.252 17.251-3.022 2.267-4.282 2.015-4.282-0.63 0-1.133-1.133-10.704-2.519-21.029-2.267-17.251-6.045-46.466-14.481-112.073-1.763-13.222-5.163-39.54-7.556-58.554-2.519-19.014-6.171-47.348-8.185-62.962s-5.415-42.31-7.556-59.562c-2.267-17.125-3.652-32.363-3.274-34 0.882-3.4 8.311-15.237 9.067-14.481 0.252 0.378 2.77 20.903 5.541 45.837zM84.361 364.333c1.889 15.111 5.415 42.688 7.808 61.451 2.393 18.637 5.415 41.933 6.8 51.629l2.393 17.629-2.645 2.267c-1.511 1.259-3.022 1.763-3.526 1.259s-1.511-5.541-2.267-11.082-5.415-37.903-10.452-71.777l-8.941-61.703 2.896-8.563c1.511-4.659 3.148-8.437 3.526-8.437 0.504 0 2.393 12.34 4.408 27.326zM775.686 347.837c1.763 1.763 2.015 9.571 2.015 67.37v65.355h-3.526c-7.682 0-7.556 1.889-8.060-69.636l-0.378-65.103h4.030c2.141 0 4.911 0.882 5.919 2.015zM500.038 370.378c28.459 4.282 53.266 12.214 77.822 24.807 15.866 8.185 23.422 13.851 41.051 30.726 26.192 25.059 42.31 46.97 57.422 77.948 22.037 45.081 30.6 84.999 41.429 192.035 4.911 47.977 11.334 134.991 12.718 170.628 0.378 10.326 1.259 27.326 2.015 37.777 1.385 22.163 3.022 19.14-16.496 28.585-27.074 13.096-53.14 22.163-87.517 30.6-42.059 10.326-69.259 13.599-110.813 13.725l-30.222 0.126 0.252-14.481c0-7.934 0.756-26.444 1.511-40.925 3.778-70.14 3.022-158.665-1.889-207.776-2.77-28.207-8.185-62.458-11.208-70.014-0.63-1.637 2.267-3.022 14.733-7.304 22.792-7.934 42.562-17.881 45.585-22.792 5.415-9.319-4.282-22.666-16.622-22.666-2.141 0-8.563 2.267-14.481 4.911-28.207 12.97-84.747 28.207-117.362 31.607-22.54 2.393-57.548 1.007-81.851-3.4-13.222-2.393-36.895-11.334-56.667-21.533-22.792-11.836-36.77-27.578-40.925-46.214-2.267-10.074-1.637-30.222 1.259-41.555 3.148-12.466 11.962-30.6 20.022-41.177 35.888-47.222 109.932-88.147 185.865-102.503 24.178-4.533 58.429-5.037 84.369-1.133zM888.515 374.281c4.533 1.889 5.037 2.393 5.037 6.674 0.252 34.378-0.504 112.954-1.133 116.228-0.126 1.133-6.674 1.259-9.445 0.252-1.763-0.63-2.015-7.43-2.015-62.962 0-39.792 0.504-62.206 1.259-62.206 0.63 0 3.526 0.882 6.297 2.015zM943.543 443.414l4.533 1.889-0.882 104.265c-1.007 132.85-1.133 136.754-5.919 148.214-7.808 18.763-7.43 22.54-6.674-59.814 0.252-41.177 0.882-82.858 1.133-92.555s0.504-37.021 0.63-60.821c0-28.711 0.378-43.066 1.259-43.066 0.756 0 3.4 0.882 5.919 1.889zM186.233 474.77c0.756 10.2 0.504 11.208-3.148 19.266l-4.030 8.563-1.511-12.592c-2.393-20.148-2.393-21.029 2.393-24.052 2.141-1.511 4.408-2.519 4.785-2.267s1.133 5.289 1.511 11.082zM108.412 550.701c1.133 10.326 9.948 78.829 14.481 112.451 6.8 52.007 7.304 59.436 4.282 56.289-0.378-0.378-3.274-17.881-6.297-38.91-19.644-135.747-19.518-134.865-17.881-135.872 3.4-2.267 4.533-1.007 5.415 6.045zM199.078 608.375c0.756 3.148 4.408 37.273 4.408 41.429 0 3.526-4.533 6.8-6.548 4.785-0.63-0.63-2.267-11.334-3.526-23.674-1.385-12.466-2.77-25.437-3.148-28.837l-0.756-6.297 4.408 5.037c2.519 2.77 4.785 6.171 5.163 7.556zM300.698 655.849c1.385 1.259 2.267 6.297 3.4 19.896 1.889 24.555 2.141 22.666-3.022 22.666-5.289 0-5.163 0.378-6.926-21.785-1.763-22.54-1.763-22.289 1.637-22.289 1.637 0 3.778 0.756 4.911 1.511zM400.431 657.738c0.252 1.259 0.882 8.815 1.385 16.748 0.378 7.934 1.511 25.815 2.519 39.666 3.526 50.874 3.652 57.296 1.511 57.296-2.393 0-2.645-1.889-5.415-37.777-1.007-14.859-2.896-38.281-4.156-52.007-1.133-13.725-1.889-25.185-1.511-25.437 1.385-1.511 5.037-0.378 5.667 1.511zM163.693 681.915c0.756 1.133 5.541 41.429 11.46 96.458 1.763 16.622 3.526 32.615 3.904 35.636l0.63 5.415-3.148-2.015c-2.393-1.637-3.274-3.274-3.274-6.171 0-7.934-5.415-60.192-9.571-92.177-2.393-18.133-4.282-34.126-4.282-35.636 0-2.645 3.022-3.652 4.282-1.511zM890.404 734.551l-0.882 52.637-3.148 4.659c-7.178 10.578-6.8 12.592-6.422-46.34l0.252-54.022 4.659-4.785c2.519-2.519 5.037-4.659 5.541-4.659 0.378 0 0.378 23.674 0 52.511zM773.923 818.040c0.63 73.162 0.504 78.829-1.511 81.095-1.259 1.385-2.393 2.267-2.77 1.889-0.882-1.007-2.141-160.554-1.133-161.435 0.504-0.504 1.763-0.756 2.896-0.63 1.637 0.378 2.015 9.319 2.519 79.081zM362.653 767.922c0.882 7.808 4.030 45.207 5.289 62.836 0.756 11.836 0.756 12.214-2.015 13.096-1.511 0.504-3.274 0.378-3.778-0.252-0.882-0.882-3.652-28.837-7.052-71.903l-0.882-10.326h3.904c3.652 0 3.904 0.252 4.533 6.548zM263.677 811.995c0.882 0.882 1.511 4.030 1.511 7.178 0 3.274 1.511 20.274 3.148 37.903 4.785 48.229 5.163 54.778 3.022 53.518-3.274-1.889-6.171-4.785-5.541-5.541 0.252-0.504-0.252-6.8-1.259-13.977-0.882-7.304-2.015-19.14-2.519-26.444s-1.637-20.652-2.645-29.593c-2.393-22.037-2.267-24.555 0.504-24.555 1.259 0 2.896 0.63 3.778 1.511zM323.239 896.742c0.378 2.77 1.133 13.096 1.637 22.918 0.882 18.889 0.504 20.274-4.659 16.37-1.511-1.133-2.519-5.919-4.030-20.274-2.645-25.941-2.77-24.933 2.141-24.429 3.652 0.378 4.156 0.882 4.911 5.415z"></path>
                  <path d="M278.284 430.696c-13.096 5.667-14.103 23.422-1.763 29.718 8.941 4.533 18.007 2.393 22.666-5.415 8.815-14.355-5.541-30.978-20.903-24.303zM363.66 442.784c-12.088 7.43-12.088 25.311 0 32.741 11.962 7.178 27.452-2.267 27.452-16.622 0-13.851-15.866-23.17-27.452-16.118z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://github.com/alephjs/aleph.js" className="icon">
                <svg viewBox="0 0 1024 1024" style={{ width: '1em', height: '1em' }} fill="currentColor">
                  <title>Github</title>
                  <path d="M512-0.001c-282.778 0-512.001 229.581-512.001 512.871 0 226.56 146.688 418.816 350.157 486.606 25.6 4.71 34.919-11.111 34.919-24.73 0-12.134-0.409-44.442-0.666-87.193-142.439 30.976-172.493-68.761-172.493-68.761-23.245-59.29-56.832-75.059-56.832-75.059-46.489-31.744 3.533-31.129 3.533-31.129 51.354 3.584 78.388 52.838 78.388 52.838 45.671 78.336 119.86 55.705 148.992 42.599 4.71-33.126 17.92-55.705 32.563-68.506-113.664-12.954-233.217-56.986-233.217-253.492 0-55.962 19.968-101.785 52.685-137.626-5.274-12.954-22.835-65.126 5.017-135.681 0 0 43.008-13.824 140.8 52.531 38.411-10.894 82.534-17.188 128.116-17.255h0.038c43.52 0.205 87.297 5.888 128.205 17.255 97.741-66.355 140.646-52.583 140.646-52.583 27.955 70.605 10.343 122.778 5.12 135.731 32.768 35.84 52.633 81.664 52.633 137.626 0 197.018-119.757 240.384-233.78 253.082 18.38 15.821 34.714 47.104 34.714 94.977 0 68.506-0.614 123.853-0.614 140.646 0 13.722 9.216 29.696 35.226 24.678 205.067-70.281 349.85-261.406 349.85-486.346 0-0.073 0-0.146 0-0.22v0.012c0-283.29-229.274-512.871-512.001-512.871z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header title="Welcome to my app!" />
        <p className={styles.description}>
          Get started by firse editing <code>pages/index.js</code>
        </p> */}
        
            
            <div className={styles.main__headings}>
                <h1 className={styles.mainHeadings__title}>Work Experience</h1>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>June, 2022 - <br/>present</div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Full-stack Software Developer (Javascript, Typescript, React)</h2>
                    <h4 className={styles.mainSub__subtitle}>BOLT EARTH ev Charging Network, Bangalore</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        <li>Frontend Web Application development in React.js.</li>
                        <li>Backend development in MongoDB, expressJS and Node.</li>
                        <li>Defining and consuming GraphQL queries and mutations alongside Apollo client.</li>
                        <li>Building APIs and writing unit test cases for them.</li>
                        <li>DOCKER: container management on server microservices</li>
                        <li>KUBERNETES: server management</li>
                        <li>Using frameworks like SENTRY, PRISMA, MUI etc.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>Jan, 2022 - <br/>Mar, 2022</div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Product Management Intern</h2>
                    <h4 className={styles.mainSub__subtitle}>Zinnov Management Consulting, Bangalore</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        <li>Data management for market research</li>
                        <li>Trend analysis data based: Deck creation support</li>
                        <li>information/data retrieval for establishing market data points</li>
                        <li>API tool utility for fetching and updating excel data.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>July, 2021 - <br/>Jan, 2022</div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Thesis - Robotics Research Scholar</h2>
                    <h4 className={styles.mainSub__subtitle}>BITS PILANI, Hyderabad Campus</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        <li>Optimization of the robotic manipulator arm structure</li>
                    </ul>
                </div>
            </div>
             <div className={styles.flex}>
                <div className={styles.mainSub__time}>May, 2021 - <br/>July, 2021</div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Full-stack Developer (Typescript, Python)</h2>
                    <h4 className={styles.mainSub__subtitle}>ES Magico Experiences, Mumbai</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        <li>Frontend Web Application development in React.js.</li>
                        <li>Backend development in Django, firebase and Node.</li>
                        <li>Defining and consuming GraphQL queries and mutations alongside Apollo client.</li>
                        <li>Building APIs and writing unit test cases for them.</li>
                        <li>Using frameworks like REDIS, Material UI, AntD, jest, etc.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>Sep, 2019 - <br/>Feb, 2021</div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Full-stack Web Developer</h2>
                    <h4 className={styles.mainSub__subtitle}>Shubhswapn Machine Tools Pvt. Ltd., Bhopal</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        <li>Material UI framework used alongside raw HTML, SASS(Syntactically Awesome Style Sheets) and Javascript.</li>
                        <li>Designed and developed the entire backend on NODE.js for the company website, for further introduction of REACT.</li>
                        <li>SMT is a Professionally Managed TechnologyMarketing company involving high-tech machine tools imported from industrially developed nations.</li>
                        <li>The company represents some world-renowned manufacturers from Europe, the USA, and Far East Countries for high-end factory equipment.</li>
                        <li>Conducted several meetings with the MANAGING DIRECTOR to understand and design the website as required.</li>
                        <li>Deployed with AWS for hosting and remote storage, and Google Domains.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>May, 2018 - <br/>July, 2018</div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Manufacturing Solutions</h2>
                    <h4 className={styles.mainSub__subtitle}>Rourkela Steel Plant, Rourkela</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        
                        <li>Rourkela Steel Plant (RSP), is the largest steel plant in India producing 8.7 million tonnes of processed steel annually.</li>
                        <li>Operated in a team of 7 BITSIANS under the purview of Plate Mill Dept, fostered by Mr Amresh K. Srivastva (General Manager, Mechanical Dept.).</li>
                        <li>Designed and implemented algorithms into data handling software.</li>
                        <li>Revamped the manufacturing process and diagnosed the supply chain model to optimize the plant's operations.</li>
                        <li>Restructured the design of a frequently serviced module placing it outside the core machine casing thereby establishing easy accessibility.</li>
                        <li>Engineered an automated request input mechanism into a hydraulic width adjustment unit at the sheet metal cutting workshop.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>Aug, 2016 - <br/>Mar, 2017</div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Web design and development intern</h2>
                    <h4 className={styles.mainSub__subtitle}>Pixelscapes India Pvt. Ltd. (Hyderabad)</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        
                        <li>Delivered in a team of 3 interns led by the Mr Aditya Vidhate (CTO of this startup) in its expansion stages</li>
                        <li>Streamlined and accelerated development of the backend algorithms, as well as the frontend design and layout of the company website.</li>
                    </ul>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>Aug, 2016 - <br/>May, 2017</div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Business Development ( Network Expansion )</h2>
                    <h4 className={styles.mainSub__subtitle}>SmileMiddle, Hyderabad</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        
                        <li>Administered logistics with Mr Harshit Soni, the founder of this Start-up,  who was a senior from my college.</li>
                        <li>Performed market research for competition, expansion and B2B negotiations.</li>
                        <li>Witnessing the startup growing from scratch to being evaluated for more than $1 Million.</li>
                    </ul>
                </div>
            </div>


            <div style="margin-top: 50px;" className={styles.main__headings}>
                <h1>Projects</h1>
            </div>


            <div className={styles.flex}>
                <div className={styles.mainSub__time}>March, 2021 - </div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>"sw-insta" - Instagram Clone Multiplatform mobile application (realtime feed and posting)</h2>
                    <h4 className={styles.mainSub__subtitle}>React Native, Expo CLI, firebase and Redux</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        
                        <li>Global live feed implemented using realtime remote database on Firebase firestore.</li>
                        <li>Register a new account with a unique username and your own password.</li>
                        <li>REDUX used with React context API for easy manipulation of the data layer from every component level.</li>
                        <li>React Native Elements implementation for replicating the UI elements.</li>
                        <li>Keyboard-Avoiding-view and safe-area-views for basic realistic user interface of the app.</li>
                        <li>React Native Navigation used for gestures' based stacked intuitive navigation throughout the app.</li>
                        <li>Story section with lazy horizontal scrolling placed at top of the homescreen</li>
                    </ul>
                </div>
            </div>
            
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>March, 2021 - </div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>"sw-signal" - Whatsapp Clone Multiplatform mobile application (realtime chatting and public channel creation)</h2>
                    <h4 className={styles.mainSub__subtitle}>React Native, Expo CLI, firebase and Redux</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        
                        <li>Realtime chatting implemented using realtime remote database on Firebase firestore.</li>
                        <li>Register a new account with a unique username and your own password.</li>
                        <li>REDUX used with React context API for easy manipulation of the data layer from every component level.</li>
                        <li>React Native Elements implementation for replicating the UI elements.</li>
                        <li>Keyboard-Avoiding-view and safe-area-views for basic realistic user interface of the app.</li>
                        <li>React Native Navigation used for gestures' based stacked intuitive navigation throughout the app.</li>
                        <li>Last active and new public channel creation by any user.</li>
                    </ul>
                </div>
            </div>

            <div className={styles.flex}>
                <div className={styles.mainSub__time}>Feb, 2021 - </div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>"sw-facebook" - A react.js webApp cloning reatime posts and live feed of facebook.</h2>
                    <h4 className={styles.mainSub__subtitle}>ReactJs, firebase and Redux<span style="margin-left: 10px;" className={styles.pills}>https://sw-facebook.web.app/</span></h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        <li>Login with google (google auth)</li>
                        <li>REDUX/ react context API architecture</li>
                        <li>Firebase Firestore DB</li>
                        <li>posting images, GIFs, and plain text user posts into the live feed.</li>
                        <li>BEM classNaming convention - scalable app.</li>
                        
                    </ul>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>Feb, 2021 - </div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>"sw-whatsapp" - A react.js webApp cloning realtime chat, public channel creation and UI of WhatsApp web.</h2>
                    <h4 className={styles.mainSub__subtitle}>ReactJs, firebase and Redux<span style="margin-left: 10px;" className={styles.pills}>https://sw-whatsapp-6a9d8.web.app/</span></h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        <li>Firebase Firestore DB</li>
                        <li>Login with google (google auth)</li>
                        <li>REDUX/ react context API architecture</li>
                        <li>chat room creation</li>
                        <li>real-time chatting using firebase</li>
                        <li>BEM classNaming convention for easy scaling of the app</li>
                    </ul>
                </div>
            </div>
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>Feb, 2021 - </div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>"sw-music" - Spotify Clone WebApp (realtime playlist updates from spotify account)</h2>
                    <h4 className={styles.mainSub__subtitle}>ReactJs, Spotify Developer Tools</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        
                        <li>Login with spotify account implemented.</li>
                        <li>Complete responsive web application cloning the UI of spotify web.</li>
                        <li>Liked playlists and custom playlists showcase using Spotify Developer Tools.</li>
                         {/* <li>Firebase</li> */}
                        <li>BEM classNaming convention for easy scaling of the app</li>
                         {/* <li>fdgdfgdfg</li>
                        <li>fdgdfgdfg</li>
                        <li>fdgdfgdfg</li> */}
                    </ul>
                </div>
            </div>
            
            <div className={styles.flex}>
                <div className={styles.mainSub__time}>April, 2019 - </div>
                <div className={styles.mainSub__desc}>
                    <h2 className={styles.mainSub__title}>Medical History Management System - implementing Blockchain</h2>
                    <h4 className={styles.mainSub__subtitle}>Cryptography, Blockchain, Python, Flask framework</h4>
                    <ul className={styles.mainSub__descList} style="list-style-position: inside;">
                        <li>Operated in a team of 4, under the guidance of Prof. G. GeethaKumari (Dept. of Computer Science).</li>
                        <li>Deployed Zero-Knowledge Proof for validation of data entry requests.</li>
                        <li>Establishing higher data security pertaining to patients' medical history.</li>
                        <li>Tech used: Python, Flask framework.</li>
                    </ul>
                </div>
            </div>
            
            

            
            
        
      </main>

      <Footer />
    </div>
  )
}

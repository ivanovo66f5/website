import { Link } from "react-router-dom";
import StackHelper from "../../utils/helpers/stackHelper";
import Tech from "../../components/Tech/Technology";
import "./Home.scss";

export default function Home() {
    return (
        <main>
            <div className="fullscreen">
                <div className="container">
                    <div className="fullscreen-content">
                        <div className="offer">
                            <h1>Клуб F5 ─ Добро пожаловать!</h1>
                            <p>Мы клуб по WEB программированию на базе МБОУ СОШ №66, основанный в 2024 году. На наших занятиях дети изучают современные технологии, которые после используют для создания своих собственных проектов</p>
                        </div>
                        <div className="fullscreen-img">
                            <img src="./img/home/code1.png" alt="" />
                            <img src="./img/home/code2.png" alt="" />
                        </div>
                    </div>
                </div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" /></defs><g className="parallax"><use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" /><use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" /><use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" /><use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" /></g></svg>
            </div>
            <div className="container">
                <div className="actual">
                    <div className="actual-img">
                        <img src="./img/home/actual.png" alt="" />
                    </div>
                    <div className="actual-text">
                        <h1>Актуальность</h1>
                        <p>Актуальность работы в веб-программировании сегодня трудно переоценить. Мир всё больше зависит от интернета, и спрос на специалистов, способных создавать, поддерживать и развивать веб-приложения и сайты, постоянно растёт. Тем более в девятом классе ребятам предстоит создавать и защищать итоговый проект, и выбор веб-разработки в качестве темы проекта представляется особенно интересным</p>
                    </div>
                </div>
                <div className="about-learning">
                    <div className="learning-text">
                        <h1>Учимся на практике</h1>
                        <p>Ребята во время прохождения курса обучения будут постоянно практиковаться, создавать свои собственные проекты, а также работать в команде, что позволит им не только освоить теоретические основы веб-программирования, но и развить важные практические навыки</p>
                    </div>
                    <div className="learning-img">
                        <img src="./img/home/future.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="forfree"><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1><h1>БЕСПЛАТНО</h1></div>
            <div className="container">
                <div className="stack">
                    <ul className="techs">
                        {
                            StackHelper.map((element, index) => <Tech src={element.src} key={index} />)
                        }
                    </ul>
                    <div className="stack-text">
                        <h1>Наш стек</h1>
                        <p>Вместе с нами дети изучат современные и активно развивающиеся технологии в области бекенда или фронтенда</p>
                        <p>Мы используем TypeScript + Next.js + SCSS для фронтенда и Nodejs express для бекенда</p>
                    </div>
                </div>
                <div className="team">
                    <div className="team-offer">
                        <h1>Работа в команде</h1>
                        <ul className="team-adven">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>MarkDown</li>
                        </ul>
                        <p>Дети обучаться работе с Git, системой контроля версий, что позволит им эффективно работать над большими проектами, значительно сокращая время и усилия, затрачиваемые на совместную работу</p>
                    </div>
                    <div className="team-img">
                        <img src="./img/home/team.png" alt="" />
                    </div>
                </div>
                <div className="working-field">
                    <div className="working-img">
                        <img src="./img/home/working.png" alt="" />
                    </div>
                    <div className="working-text">
                        <h1>Приходите и вы к нам</h1>
                        <p>Мы ради видеть школьников от 10 до 18 лет, если вы действительно хотите обучиться созданию современных веб приложений, приходите к нам</p>
                        <div className="working-btn">
                            <Link to="/working">Узнать о работе</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
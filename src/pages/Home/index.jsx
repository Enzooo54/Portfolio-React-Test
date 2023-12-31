import './Home.css';

function Home() {
    return (
        <div>
            <h2 className='enzo'>Enzo Sontot</h2>
            <h1>Design simple et épuré</h1>
            <svg className='etoile' xmlns="http://www.w3.org/2000/svg" width="189" height="189" viewBox="0 0 189 189" fill="none">
            <path d="M83.5717 139.657L51.3552 178.163L63.287 129.382L16.8788 148.495L50.0972 110.851L0.128884 106.192L47.0238 88.3081L4.9425 60.9446L54.7709 66.9181L30.217 23.1185L71.5638 51.5812L70.1622 1.37943L93.5554 45.8107L115.627 0.707458L115.708 50.9287L156.197 21.2565L132.946 65.7627L182.576 58.3191L141.321 86.9144L188.723 103.405L138.914 109.538L173.229 146.185L126.277 128.451L139.643 176.858L106.304 139.321L95.6598 188.399L83.5717 139.657Z" fill="#B550F8"/>
            </svg>
            <svg className='ecrit' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3569 47.5051C16.0408 47.8219 15.6117 48 15.1642 48C14.7167 48 14.2876 47.8219 13.9715 47.5051L0.494907 34.0285C0.178066 33.7124 0 33.2833 0 32.8358C0 32.3883 0.178066 31.9592 0.494907 31.6431L6.90304 25.235L9.69607 14.073C10.1282 12.3439 11.4391 10.9703 13.1461 10.4579L48 0L37.5421 34.8573C37.0293 36.5621 35.6574 37.8714 33.9304 38.3039L22.7684 41.0936L16.3569 47.5051ZM22.4214 37.7076L33.1117 35.0358C33.689 34.8918 34.1475 34.4538 34.3179 33.8836L42.9766 5.02678L42.9729 5.02789L42.8856 5.31653L28.6408 22.7283C28.6408 24.5891 27.1324 26.0975 25.2717 26.0975C23.4109 26.0975 21.9025 24.5891 21.9025 22.7283C21.9025 20.8676 23.4109 19.3592 25.2717 19.3592L42.6828 5.1149L14.113 13.6855C13.5463 13.8572 13.1114 14.3139 12.9675 14.8883L10.2924 25.582L22.4214 37.711V37.7076Z" fill="white"/>
            </svg>
            <div className='rectangle'>
                <svg className='rond' xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                <ellipse cx="29.6823" cy="29.5312" rx="28.8851" ry="28.9062" fill="#EF6D58"/>
                </svg>
                <div className='barre'></div>
            </div>
            <p className='desc'>À 20 ans, je débute dans le développement web, explorant HTML, CSS et JavaScript avec passion. Chaque ligne de code est une étape vers ma croissance et ma future expertise.</p>
            <button>Voir mes projets</button>
            
        </div>
    );
}

export default Home;

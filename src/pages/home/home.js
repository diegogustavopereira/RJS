import { Button, Container, Image } from "react-bootstrap";
import MS from "./../../images/Marca Ministério da Saúde - Vertical.png";
import SUS from "./../../images/sus-logo-1-1.png";
import CNJ from "./../../images/CNJ.png";
import ANS from "./../../images/ANS.png";
import SIREJUD from "./../../images/sirejud.png";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
	return (
		<Container className="homePageImage">
			<div className="btnheader">
				
				<Button variant="primary" size="lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-person-fill"
						viewBox="0 0 16 16"
					>
						<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
					</svg>
					<> Entrar</>
				</Button>{" "}
			</div>
			<div className="imgbody">
				<Image src={SIREJUD} className="logo" />
			</div>
			<div className="imgfooter">
				<Image src={MS} className="logobtn" />
				<Image src={SUS} className="logobtn" />
				<Image src={CNJ} className="logobtn" />
				<Image src={ANS} className="logobtn" />
			</div>
		</Container>
	);
}

export default Home;

import linkedLogo from "../../assets/social media icon/104493_linkedin_icon 1.svg";
import gmailLogo from "../../assets/social media icon/1181190_email_gmail_google_mail_icon 1.svg";
import githubLogo from "../../assets/social media icon/394187_github_icon 1.svg";
import whatsappLogo from "../../assets/social media icon/843786_whatsapp_icon 1.svg";

const Comp = ({img, link, className}) => {
	return (
		<>
			<div className={className}>
				<a href={link} target="_blank">
					<img src={img} alt="linkedin link" height={25} width={25} />
				</a>
			</div>
		</>
	);
};

export default function IconSocial({className}) {
	return (
		<>
			<Comp
				className={className}
				img={githubLogo}
				link={"https://github.com/esdra00"}
			/>
			<Comp
				className={className}
				img={linkedLogo}
				link={"https://www.linkedin.com/in/esdra-bergamasco/"}
			/>
			<Comp
				className={className}
				img={gmailLogo}
				link={"mailto:esdrabergamasco@gmail.com"}
			/>
			<Comp
				className={className}
				img={whatsappLogo}
				link={"tel:+393475330260"}
			/>
		</>
	);
}

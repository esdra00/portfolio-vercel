import {GithubSvg, GmailSvg, LinkedinSvg, WhatsAppSvg} from "../../_shared/svgIcons";

const Links = ({children, link, className}) => {
	return (
		<div className={className}>
			<a href={link} target="_blank">
				{children}
			</a>
		</div>
	);
};

export default function SocialsLinksIcon({className}) {
	return (
		<>
			<Links className={className} link={"https://github.com/esdra00"}>
				<GithubSvg />
			</Links>
			<Links
				className={className}
				link={"https://www.linkedin.com/in/esdra-bergamasco/"}
			>
				<LinkedinSvg />
			</Links>
			<Links className={className} link={"mailto:esdrabergamasco@gmail.com"}>
				<GmailSvg />
			</Links>
			<Links className={className} link={"tel:+393475330260"}>
				<WhatsAppSvg />
			</Links>
		</>
	);
}

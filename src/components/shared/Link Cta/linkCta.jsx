import externalLinkIcon from "/src/assets/social media icon/8666682_external_link_icon.svg";
import style from "./ctaStyle.module.scss";


export default function LinkCta({link, text}) {
	return (
		<a href={link} className={style.link}>
			{text}
			<img
				src={externalLinkIcon}
				alt="external link icon"
				height={18}
				width={18}
			/>
		</a>
	);
}

import React from "react";
import Image from "next/image";
import AccessibilityIcon from "@/public/icons/accessibility_icon.svg";
import H3 from "@/src/components/atoms/H3";
import H2 from "@/src/components/atoms/H2";

const HomePage = () => {
	return (
		<div>
			<section className="h-[500px] relative flex justify-center items-center mt-[-px] border-solid border-b-[2px] border-primary">
				<Image src="/images/home_background.png" fill style={{ objectFit: "cover" }} alt="background image" />
				<div className="z-10 text-center">
					<H3>CampAble</H3>
					<p className="font-lora font-semibold text-[20px] md:text-[30px]">
						Empowering people with disability <br />
						to believe in their ability
					</p>
				</div>
			</section>
			<section className="bg-background px-[10px] py-[80px] gap-x-[100px] border-solid border-b-[0.5px] border-white">
				<div className="flex flex-col text-center md:text-left md:flex-row items-center justify-center">
					<div className="max-w-[650px]">
						<H2>Who are we?</H2>
						<div className="md:hidden flex justify-center">
							<Image
								src="/images/home_2_camp.png"
								width={250}
								height={250}
								alt="camp image"
								style={{ objectFit: "cover" }}
							/>
						</div>
						<p>
							캠핑에서 영감을 받은 CampAble은 장애를 방해물로 보는 기존의 인식을 깨고자 &quot;Camp&ldquo;와 
							&quot;Able&ldquo;이라는 단어를 결합한 이름입니다. CampAble은 장애 문제에 대해 재미있고 신속한 해결책을
							모색하는 사람들의 모임입니다. 저희는 언제 어디서나 캠핑을 하듯 유연하게 문제를 해결하는 동시에, 즐거움을
							잃지 않고 효율적으로 문제에 접근하는 태도를 중요시하는 팀입니다. 궁극적으로는 장애와 기술에 관심 있는
							누구나 잠시 머무르며 문제를 집중적으로 해결할 수 있는 창의적인 오픈 커뮤니티를 꿈꿉니다.
						</p>
					</div>

					<div className="hidden md:block">
						<Image
							src="/images/home_2_camp.png"
							width={400}
							height={400}
							alt="camp image"
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>
			</section>
			<section className="bg-background flex flex-col items-center justify-center px-[10px] py-[80px] border-solid border-b-[0.5px] border-white">
				<div className="flex flex-col text-center items-center max-w-[650px] gap-y-3 ">
					<H3>Purpose</H3>
					<AccessibilityIcon />
					<p className="font-lora font-bold">Empowering people with disability to believe in their ability</p>
					<p className="break-keep">
						Campable은 기술을 활용하여 고품질 솔루션/프로덕트를 만들어, 장애로 인해 할 수 없다고 생각하기보다는 장애가
						있어도 무엇이든 할 수 있다는 자신감을 사람들에게 심어주기 위해 존재합니다.
					</p>
				</div>
			</section>
			<section className="bg-background flex item-center justify-center px-[10px] py-[80px] relative">
				<Image src="/images/home_4_background.png" fill style={{ objectFit: "cover" }} alt="background image" />
				<div className="flex flex-col text-center items-center max-w-[650px] gap-y-3 z-10">
					<H3>Vision</H3>
					<p className="font-lora font-bold">&quot;To provide an all-in-one accessibility solution&ldquo;</p>
					<p className="break-keep">
						CampAble의 미션은 사람들이 장애 관련 문제를 해결할 혁신적인 아이디어와 기술을 공유하고 개발할 수 있는 오픈
						소스 플랫폼이 되어, 누구나 이를 수정, 활용, 개선하여 사회의 더 큰 이익을 위해 기여할 수 있도록 하는
						것입니다.
					</p>
				</div>
			</section>
			<footer className="bg-background flex item-center justify-center px-[10px] py-[80px]">
				Hi, we are CampAble :)
			</footer>
		</div>
	);
};

export default HomePage;

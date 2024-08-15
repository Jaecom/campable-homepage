import H1 from "@/src/components/atoms/H1";
import React from "react";
import ListIcon from "@/public/icons/list_item_icon.svg";
import Image from "next/image";

const AwardsPage = () => {
	return (
		<div className="bg-background">
			<section className="border-y-[0.5px] border-solid border-white py-[40px] pl-[100px]">
				<H1 className="">Awards</H1>
				<p>
					CampAble(구 해바라기팀)은 2023년 2월 연세대학교 공과대학교와 SK 행복나눔재단의 캡스톤 수업에서 시작된
					팀입니다.
				</p>
			</section>
			<section className="flex border-b-[0.5px] border-solid border-white py-[40px] pl-[100px]">
				<div>
					<div>
						<div className="flex items-end">
							<ListIcon />
							<p className="text-primary font-dmSans text-[40px] translate-y-[25%] ml-[10px]">2024</p>
						</div>
						<div className="border-solid border-l-[2px] border-primary translate-x-[9px]">
							<ul className="flex flex-col gap-y-[10px] pt-[20px] ml-[20px]">
								<li>
									&#x2022; 연세대학교 글로벌사회공헌원 주관 지속가능발전 목표 달성 연구 프로젝트 SEF 2024 팀 선정
									(24.07.16~)
								</li>
								<li>&#x2022; 전국장애비장애 대학생 창업경진대회 대상 (교육부장관상) 24.02.01) </li>
								<li>&#x2022; 23-2 연세대학교 고등교육혁신원 IHEI FESTA 성과 공유회 최우수상 (24.01.18) </li>
								<li>&#x2022; 연세대학교 AI 융합 아이디어 공모전 장려상 (24.01.11) </li>
							</ul>
						</div>
					</div>
					<div>
						<div className="flex items-end">
							<ListIcon />
							<p className="text-primary font-dmSans text-[40px] translate-y-[25%] ml-[10px]">2023</p>
						</div>
						<div className="border-solid border-l-[2px] border-primary translate-x-[9px]">
							<ul className="flex flex-col gap-y-[10px] pt-[20px] ml-[20px]">
								<li>&#x2022; International Capstone Design Fair, Second Prize (23.11.29)</li>
								<li>&#x2022; 제 6회 디테크 공모전 대상 (에듀테크협회장상, 보건복지부장관상) (23.11.22) </li>
								<li>&#x2022; 창의적종합설계 경진대회 장려상 (23.11.02) </li>
								<li>&#x2022; 연세대학교 메이커스페이스경진대회 최우수상 (23.09.04) </li>
								<li>&#x2022; 지속가능발전목표 달성 영상 캠페인 공모전 우수상 (23.07.21)</li>
								<li>&#x2022; 연세대학교 공과대학 수업성과 아이디어 경진대회 장려상 (23.07.09)</li>
								<li>&#x2022; SK SUNNY 행복 나눔재단 지원  (23.02.13~23.12 .31)</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex items-end">
					<Image src="/images/awards_trophy.png" width={400} height={400} alt="trophy" style={{ objectFit: "cover" }} />
				</div>
			</section>
			<section className="border-b-[0.5px] border-solid border-white py-[40px] pl-[100px]">
				<H1 className="">Press Release</H1>
			</section>
			<section className="flex border-b-[0.5px] border-solid border-white py-[40px]">
				<div className="flex items-start">
					<Image src="/images/awards_press.png" width={400} height={400} alt="trophy" style={{ objectFit: "cover" }} />
				</div>
				<div className="border-solid border-l-[2px] border-primary  ml-[40px]">
					<ul className="flex flex-col gap-y-[50px] ml-[20px]">
						<li className="flex flex-col gap-y-[12px] max-w-[600px] break-keep">
							<p className="font-extrabold">&lt;한경국립대, 제3회 장애·비장애 창업경진대회 개최&gt;</p>
							<p>
								행사 마지막 날에는 3일 동안 팀별로 논의한 창업아이디어를 발표하는 자리로 최종 우승은 해바라기팀에게
								돌아갔다. 해바라기팀은 연세대학교 학생팀으로 시각장애인을 위한 쉽고 빠른 수학교재 점자변환 소프트웨어를
								개발하였다.
							</p>
							<a className="underline" href="https://www.kgnews.co.kr/news/article.html?no=780907" target="_blank">
								경기신문 2024.02.05
							</a>
						</li>
						<li className="flex flex-col gap-y-[12px] max-w-[600px] break-keep">
							<p className="font-extrabold">
								&lt;연세대 재학생 창업팀, 메이커스페이스 i7 지원 받아 디테크 공모전 ‘대상’ 수상&gt;
							</p>
							<p>
								해바라기팀은 전원 연세대 재학생으로, 시각장애를 가진 팀원이 개발자로 참여했다. 이 팀은 시각장애인의 점자
								교육책의 보급 부족과 높은 비용 등의 불편을 해소하고 시각장애인의 교육 수준을 향상시키고자 프로그램을
								개발했다. 기존 점역 프로세스는 높은 비용, 긴 소요 시간, 낮은 정확도, 불편한 사용성 등의 문제로 수학
								문제집을 효율적으로 점역하는 데 어려움이 있었다. 이에 해바라기팀은 시각장애인의 수학 교육에 대한 진입
								장벽을 낮추기 위해 수학 문제집 파일을 첨부해 빠르게 점역할 수 있는 소프트웨어를 개발했다. 
							</p>
							<a
								className="underline"
								href="https://www.veritas-a.com/news/articleView.html?idxno=485548"
								target="_blank"
							>
								베리타스 알파 2023.12.07
							</a>
						</li>
						<li className="flex flex-col gap-y-[12px] max-w-[600px] break-keep">
							<p className="font-extrabold">
								&lt;법무법인 디라이트 디테크 공모전…대상에 &apos;교재 점자변환 SW&apos;&gt;
							</p>
							<p>
								정주원 해바라기 대표는 “앞으로 더 많은 학습 자료가 점역될 수 있도록 다양한 상품 개발에 힘쓰겠다”며
								“필요한 곳에 필요한 기술이 적용될 수 있도록, 더욱더 ‘인간적인 기술’들을 만들어 내겠다”고 밝혔다.
							</p>
							<a className="underline" href="https://www.hankyung.com/article/202311241857i" target="_blank">
								경기신문 2024.02.05
							</a>
						</li>
						<li className="flex flex-col gap-y-[12px] max-w-[600px] break-keep">
							<p className="font-extrabold">&lt;SK행복나눔재단, ‘장애 문제’ 새로운 솔루션 성과공유&gt;</p>
							<p>
								“특히 수학 교재 점자 변환 소프트웨어 Sunny braille (현 Braille Camp)은 기존 점역 프로세스에서 발생하는
								높은 비용과 긴 소요 시간 탓에 다수의 수학 문제 집이 점역돼 제공되지 못했던 상황을 타파해, 웹사이트에서
								수학 문제집 파일을 첨부해 빠르게 점역할 수 있는 소프트웨어를 개발했다. 
							</p>
							<a
								className="underline"
								href="https://www.100ssd.co.kr/news/articleView.html?idxno=99498"
								target="_blank"
							>
								백세시대 2023.06.09
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
};

export default AwardsPage;

import styled from '@emotion/styled'
import NavLink from 'components/atoms/NavLink'
import NavMenuSubLink from 'components/atoms/NavMenuSubLink'
import { PyConKRLogo } from 'components/atoms/SVG'
import { inject, observer } from 'mobx-react'
import Router from 'next/router'
import { StoresType } from 'pages/_app'
import React from 'react'
import intl from 'react-intl-universal'
import { paths } from 'routes/paths'
import { CORAL, CORAL_LIGHT } from 'styles/colors'
import { navigationPadding } from 'styles/layout'

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 ${navigationPadding};
  background-color: white;
  box-sizing: border-box;
  border-bottom: solid 2px ${CORAL_LIGHT};
  z-index: 100;
`
const NavItem = styled.li`
  display: inline-block;
  position: relative;
  margin: 0 10px;
  font-size: 14px;
`
const NavMenuSubLinkList = styled.ul`
  visibility: hidden;
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 80px;
  left: -30px;
  width: 180px;
  font-size: 14px;
  background: #FFF;
  color: black;
  ${NavItem}:hover & {
    visibility: visible;
  }
`
const HeaderLogo = styled.p`
  margin: 23px 0 20px;
  line-height: 0;
`

// 모바일 헤더
// const NavWrapper = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   padding: 10px;
//   background-color: white;
//   box-sizing: border-box;
//   border-bottom: solid 2px ${CORAL_LIGHT};
//   z-index: 100;
//
// //
// div#navHambuger {
//     // display: none;
//     display: block;
//     position: fixed;
//     top: 10px;
//     right: 10px;
//     z-index:10;
//     width: 38px;
//     height: 38px;
//     border: 1px solid #000;
//     background: ${CORAL};
// }
//
// //
// div#navMenuList {
//     display: none;
//     position: fixed;
//     overflow-y: scroll;
//     z-index: 9;
//     top: 0;
//     left: 0;
//     background: rgba(000, 000, 000, 0.95);
//     opacity: 0.8;
//     width: 100%;
//     height: 100%;
//     padding: 62px 0 62px 10%;
// }
//
// div#navMenuList.active {
//     display: block;
// }
//
// div#navMenuList ul {
//     height: auto;
//     margin: 0px auto;
// }
//
// div#navMenuList li {
//     // height: 55px;
//     font-size: 25px;
//     line-height: 55px;
//     color: rgba(255, 255, 255, 0.75);
// }
//
// div#navMenuList li span {
//     display: inline-block;
//     vertical-align: middle;
//     width: 0;
//     height: 0;
//     margin: 0 0 3px 5px;
//     border-style: solid;
//     border-width: 6px 6px 0 6px;
//     border-color: rgba(255, 255, 255, 0.75) transparent transparent transparent;
// }
//
// div#navMenuList li span.active {
//     margin: 0 0 5px 5px;
//     border-width: 0 6px 6px 6px;
//     border-color: transparent transparent rgba(255, 255, 255, 0.75) transparent;
// }
//
// div#navMenuList ul.navMiniMenu {
//     display: none;
// }
//
// div#navMenuList ul.navMiniMenu.active {
//     display: block;
// }
//
// div#navMenuList ul.navMiniMenu li {
//     padding-left: 20px;
// }
// `
// const NavItem = styled.li`
// `

@inject('stores')
@observer
class Navigation extends React.Component<{ stores: StoresType }> {
    componentDidMount(): void {
        if (document.getElementById('navHambuger')) {
            document.getElementById('navHambuger').addEventListener('click', () => {
                document.getElementById('navMenuList').classList.toggle('active');
            });

            for (let i = 0; i < document.getElementsByClassName('navMenuLi').length; i++) {
                document.getElementsByClassName('navMenuLi')[i].addEventListener('click', () => {
                    document.getElementsByClassName('navMenuLi')[i].getElementsByClassName('caret')[0].classList.toggle('active');
                    document.getElementsByClassName('navMenuLi')[i].getElementsByClassName('navMiniMenu')[0].classList.toggle('active');
                });
            }
        }
    }

    render() {
        const { stores } = this.props

        // 모바일 엘리먼트
        // return (
        //     <NavWrapper id="mobile">
        //         <ul>
        //             <NavItem>
        //                 <PyConKRLogo
        //                     width={139}
        //                     height={37}
        //                     color={CORAL}
        //                 />
        //             </NavItem>
        //         </ul>
        //         <ul>
        //             <NavItem>
        //                 <div id="navHambuger">
        //                     X
        //                 </div>
        //                 <div id="navMenuList">
        //                     <ul>
        //                         <li className="navMenuLi">
        //                             파이콘 한국
        //                         </li>
        //                         <li className="navMenuLi">
        //                             지원 및 안내 <span className="caret"></span>
        //                             <ul className="navMiniMenu">
        //                                 <li>자주 묻는 질문</li>
        //                                 <li>알림</li>
        //                                 <li>장소</li>
        //                             </ul>
        //                         </li>
        //                         <li className="navMenuLi">
        //                             공헌하기 <span className="caret"></span>
        //                             <ul className="navMiniMenu">
        //                                 <li>공헌 안내</li>
        //                                 <li>발표안 작성 가이드</li>
        //                                 <li>발표안 제안하기</li>
        //                             </ul>
        //                         </li>
        //                         <li className="navMenuLi">
        //                             후원 <span className="caret"></span>
        //                             <ul className="navMiniMenu">
        //                                 <li>후원사 안내</li>
        //                                 <li>후원사 신청</li>
        //                             </ul>
        //                         </li>
        //                         <li className="navMenuLi">
        //                             로그인 <span className="caret"></span>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </NavItem>
        //         </ul>
        //     </NavWrapper>
        // )

        return (
          <NavWrapper>
            <ul>
              <NavItem>
                <HeaderLogo>
                  <PyConKRLogo
                    width={139}
                    height={37}
                    color={CORAL}
                  />
                </HeaderLogo>
              </NavItem>
            </ul>
            <ul>
              <NavItem>
                <NavLink
                  to='/'
                  intlKey='gnb.home'
                  name='홈'
                />
              </NavItem>
              <NavItem>
                <NavLink
                  to={paths.help.faq}
                  intlKey='gnb.help.root'
                  name='지원 및 안내'
                />
                <NavMenuSubLinkList>
                  <NavMenuSubLink
                    to={paths.help.faq}
                    intlKey='gnb.help.faq'
                    name='자주 묻는 질문'
                  />
                  <NavMenuSubLink
                    to={paths.help.notice}
                    intlKey='gnb.help.notice'
                    name='알림'
                  />
                  <NavMenuSubLink
                    to={paths.help.venue}
                    intlKey='gnb.help.venue'
                    name='장소'
                  />
                </NavMenuSubLinkList>
              </NavItem>
              <NavItem>
                <NavLink
                  to={paths.contribute.overview}
                  intlKey='gnb.contribute.root'
                  name='공헌하기'
                />
                <NavMenuSubLinkList>
                  <NavMenuSubLink
                    to={paths.contribute.overview}
                    intlKey='gnb.contribute.overview'
                    name='공헌 안내'
                  />
                  <NavMenuSubLink
                    to={paths.contribute.cfpDetailedGuide}
                    intlKey='gnb.contribute.cfpDetailedGuide'
                    name='발표안 작성 가이드'
                  />
                  <NavMenuSubLink
                    to={paths.contribute.proposingATalk}
                    intlKey='gnb.contribute.proposingATalk'
                    name='발표안 제안하기'
                  />
                </NavMenuSubLinkList>
              </NavItem>
              <NavItem>
                <NavLink
                  to={paths.sponsor.prospectus}
                  intlKey='gnb.sponsor.root'
                  name='후원'
                />
                <NavMenuSubLinkList>
                  <NavMenuSubLink
                    to={paths.sponsor.prospectus}
                    intlKey='gnb.sponsor.prospectus'
                    name='후원사 안내'
                  />
                  <NavMenuSubLink
                    to={paths.sponsor.applicationForm}
                    intlKey='gnb.sponsor.applicationForm'
                    name='후원사 신청'
                  />
                </NavMenuSubLinkList>
              </NavItem>
              <NavItem>
                {
                  stores.authStore.logined ?
                    <>
                      <NavLink
                        to={paths.account.profile}
                        intlKey='gnb.info.root'
                        name='내 정보'
                      />
                      <NavMenuSubLinkList>
                        <NavMenuSubLink
                          to={paths.account.contribution}
                          intlKey='gnb.info.history'
                          name='제안 및 신청 내역'
                        />
                        <NavMenuSubLink
                          to={paths.account.profile}
                          intlKey='gnb.info.profile'
                          name='프로필'
                        />
                        <button onClick={() => {
                          stores.authStore.logout()
                          Router.replace(paths.home)
                        }}>
                          {intl.get('gnb.info.logout')
                            .defaultMessage('로그아웃')}
                        </button>
                      </NavMenuSubLinkList>
                    </>
                    :
                    <NavLink
                      to={paths.account.login}
                      intlKey='gnb.info.login'
                      name='로그인'
                    />
                }
              </NavItem>
            </ul>
          </NavWrapper>
        )
    }
}

export default Navigation

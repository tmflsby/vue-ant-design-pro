/* eslint-disable */
export const printANSI = () => {
  // console.clear()
  // console.log('[antd pro] created()')
  // ASCII - ANSI Shadow
  let text = `
 █████╗ ███╗   ██╗████████╗██████╗     ██████╗ ██████╗  ██████╗ 
██╔══██╗████╗  ██║╚══██╔══╝██╔══██╗    ██╔══██╗██╔══██╗██╔═══██╗
███████║██╔██╗ ██║   ██║   ██║  ██║    ██████╔╝██████╔╝██║   ██║
██╔══██║██║╚██╗██║   ██║   ██║  ██║    ██╔═══╝ ██╔══██╗██║   ██║
██║  ██║██║ ╚████║   ██║   ██████╔╝    ██║     ██║  ██║╚██████╔╝
╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═════╝     ╚═╝     ╚═╝  ╚═╝ ╚═════╝ 
\t\t\t\t\tPublished ${APP_VERSION}-${GIT_HASH} @ antdv.com
\t\t\t\t\tBuild date: ${BUILD_DATE}`
  console.log(`%c${text}`, 'color: orange')
  console.log('%c感谢使用 antd pro!', 'color: orange; font-size: 14px;    font-family: Hiragino Sans GB,Microsoft YaHei,\\\\5FAE\\8F6F\\96C5\\9ED1,Droid Sans Fallback,Source Sans,Wenquanyi Micro Hei,WenQuanYi Micro Hei Mono,WenQuanYi Zen Hei,Apple LiGothic Medium,SimHei,ST Heiti,WenQuanYi Zen Hei Sharp,sans-serif;')
  console.log('%cThanks for using antd pro!', 'color: orange; font-size: 16px; font-weight: 400; text-shadow:#000 1px 0 0,#000 0 1px 0,#000 -1px 0 0,#000 0 -1px 0;')
}

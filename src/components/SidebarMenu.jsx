import iconAll from '../assets/img/icon-all.png'
import Loading from './Loading'
function SidebarMenu(props) {
  const {isMobile} = props
  const {data} = props
  const {filterData} = props
  const {activeLink} = props

  return (
        <aside className={'sidebarSkill ' + (isMobile ? 'active' : null)}>
              <div className="overflow-y-auto h-[calc(100vh-5rem)] py-4 px-0 md:px-3 bg-base-100 rounded">
                  <ul className="space-y-2">
                      <li onClick={() => filterData('All')}>
                          <a className={activeLink !== "All" ? null : 'active'}>
                            <img className='w-6 h-6' src={iconAll} alt="All" />
                            <span className="flex-1 ml-3 whitespace-nowrap">All</span>
                          </a>
                      </li>
                      {data ? data.map((skill, index) => {
                        return <li key={index} onClick={() => filterData(skill.title)}>
                                <a className={activeLink !== skill.title ?  null : 'active'} >
                                  <img src={`https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_${skill.icon}.svg`} alt={skill.title} />
                                  <span>{skill.title}</span>
                                </a>
                            </li>
                      }) : <Loading />}
              </ul>
          </div>
        </aside>
  )
}

export default SidebarMenu;
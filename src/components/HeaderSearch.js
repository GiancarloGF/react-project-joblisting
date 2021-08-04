
import SearchTag from './SearchTag';

function HeaderSearch(props){
      let {tags, removeTag,clear}=props
      return(
            <>
                  <section className="section-search">

                        <h1 className="search-title">Welcome to JobFilter!🔍</h1>
                        {
                              tags.length===0
                              ?''
                              :<div className="section-tags">
                                    <div className="selectedTags">
                                          {tags.map(i=>{
                                                return <SearchTag removeTag={removeTag} key={i} tag={i}/>
                                          })}
                                    </div>
                                    <h4 onClick={clear} className="clear">Clear</h4>
                              </div>

                        }
                        
                  </section>
            </>
      )
}

export default HeaderSearch;
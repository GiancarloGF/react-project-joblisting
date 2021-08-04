
// import JobItemTags from './JobItemTags';
import SearchTag from './SearchTag';

function HeaderSearch(props){
      let {tags, removeTag,clear}=props
      return(
            <>
                  <section className="section-search">
                        {/* <div>
                              <input type="text" className="input-search" placeholder="Search"/>
                              <i className="fas fa-search"></i>
                        </div> */}
                        
                        <div className="section-tags">
                              <div className="selectedTags">
                                    {tags.map(i=>{
                                          return <SearchTag removeTag={removeTag} key={i} tag={i}/>
                                    })}
                              </div>
                              <h4 onClick={clear} className="clear">Clear</h4>
                        </div>
                  </section>
            </>
      )
}

export default HeaderSearch;
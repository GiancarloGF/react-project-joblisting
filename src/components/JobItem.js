// import photosnap from '../images/photosnap.svg';
// import data from '../data';
import JobItemTags from './JobItemTags'
import JobItemInfo from './JobItemInfo'
import JobItemLogo from './JobItemLogo'


function JobItem(props){
      
      let {item, addTag}=props;
      let forFilter=[item.role, item.level,...item.languages, ...item.tools]
      let styles={
            borderLeft: item.featured?'4px solid rgb(94,163,164)':'none'
      }

      return (
            <>
                  <section className="jobItem" style={styles}>
                        <JobItemLogo logo={item.logo}/>
                        <JobItemInfo item={item} />
                        <JobItemTags addTag={addTag} tags={forFilter}/>
                  </section>
            </>
      )
}

export default JobItem;
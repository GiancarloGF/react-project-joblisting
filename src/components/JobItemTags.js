
function JobItemTag(props){
      let {tags,addTag}=props;
      return (
            <div className="jobItem__tags">
                  {tags.map(i=><span key={i} className="tag" onClick={addTag}>{i}</span>)}
            </div>
      )
}


export default JobItemTag;
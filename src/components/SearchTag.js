

function SearchTag(props){
      let {tag,removeTag}=props;
      return (
            <>
                  <div className="wrapper-tag">
                        <span className="tag tag-search">{tag}</span>
                        <div className="close-tag" onClick={removeTag} ><i class="fas fa-times"></i></div>
                  </div>
            </>
      )
}

export default SearchTag;
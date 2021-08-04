function JobItemInfo(props){
      let {item}=props;
      return (
            <div className="jobItem__info">
                  <div className="jobItem__name">
                        <h5>{item.company}</h5>
                        {item.new?<h5 className="jobItem__new">NEW!</h5>:''}
                        {item.featured?<h5 className="jobItem__featured">FEATURED</h5>:''}
                  </div>
                  <h4 className="jobItem__position">{item.position}</h4>
                  <div className="jobItem__spans">
                        <span>{item.postedAt} -</span>
                        <span>{item.contract} -</span>
                        <span>{item.location}</span>
                  </div>

            </div>
      )
}

export default JobItemInfo;
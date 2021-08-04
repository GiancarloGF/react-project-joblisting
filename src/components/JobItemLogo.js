
function JobItemLogo(props){
      let {logo}=props;
      return (
            <>
            <div className="jobItem__logo">
                  <img alt="" src={logo}/>
            </div>
            </>
      )
}


export default JobItemLogo;
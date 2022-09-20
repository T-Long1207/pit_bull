import joinComunitiy from '../../assets/images2/JOINOURCOMMUNITY.png'

const Information = (props) => {

    return (
        <div id="information">
            <div className="container">
                <div class="row">
            
                    <div className="col-lg-6 col-sm ">
                        <div className="icon_join">
                        <img class="rounded float-right" src={joinComunitiy} alt="" />
                        </div>
                    </div>
                  
                </div>


            </div>
        </div>
    );
};

export default Information;

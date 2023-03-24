import React from 'react'
import { Link } from 'react-router-dom'
import "./CSS/TheSearch.css"
import Searchpage from './Searchpage'
import { Search } from '@mui/icons-material'
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useStateValue } from '../StateProvider'
import UseGoogleSearch from './UseGoogleSearch'
import response from './response'

function TheSearch() {
    const [{ term }, dispatch] = useStateValue()
    const { data } = UseGoogleSearch(term);

    // const data = response;

    return (
        <div className='seach_Result'>
            <div className="seach_header">
                <Link to="/">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" alt="google Logo" className='googleImage' />
                </Link>

                <div className="searchPage_headerBody">
                    <Searchpage hideButtons />

                    <div className="searchPage_options">
                        <div className="search_option_left">
                            <div className="searchPage_option">
                                <Search />
                                <Link to="/all">ALL</Link>
                            </div>
                            <div className="searchPage_option">
                                <SlideshowIcon />
                                <Link to="/video">Video</Link>
                            </div>
                            <div className="searchPage_option">
                                <ImageRoundedIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocationOnIcon />
                                <Link to="/map">Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>

                        {/* <div className="search_option_middle">
                            <Link to="/tools">Tools</Link>
                        </div>

                        <div className="search_option_right">
                            <Link to="/">SafeSeach On</Link>
                        </div> */}
                    </div>
                </div>

                <div className="rightSection">
                    <div className="settingIcon">
                        <SettingsIcon />
                    </div>
                    <div className="appsIcon">
                        <AppsIcon />
                    </div>
                    <div className="accountIcon">
                        <AccountCircleIcon />
                    </div>
                </div>
            </div>

            {true && (
                <div className='searchPageResults'>
                    <p className='searchPage_resultCount'>
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds for {term})
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage_results">
                            <a href={item.link} className="links">

                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='result_image' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} />
                                )}

                                {item.displayLink}
                            </a>

                            <a href={item.link} className="searchPage_title">
                                <h2>{item.title}</h2>
                            </a>

                            <p className='searchPage_snippet'>{item.snippet}</p>
                        </div>
                    ))}
                </div>

            )}

        </div>
    )
}

export default TheSearch
import './battle-page.css'
import { Fetch } from './apiCalls'
import { useEffect, useState } from 'react'

const List = ({ list, title }) => {
    return (
        <div>
            <div className="server__settings-h">{title}</div>
            {Object.entries(list).map(([key, value], index) => {
                return <div key={index} className='server__settings'>
                    <div className='server__settings-text'>{key}</div>
                    <div className='server__settings-text'>{value}</div>
                </div>
            })}
        </div>
    )

}

const LeftMenu = () => {
    return (
        <div className='left-menu'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div style={{ marginTop: '30vh' }}></div>
            <div></div>
        </div>

    )

}

const RightMenu = () => {
    return (
        <div className='right-menu'>
            <div></div>
            <div></div>
            <div></div>
        </div>



    )

}

const NavBar = () => {
    return (

        <div className='navbar'>
            <div className='nav-top'>MULTIPLAYER / SERVER BROWSER / </div>
            <div className='nav-bot'>SERVER INFO</div>
        </div>
    )
}

const Top = () => {
    return (
        <div >
            <div className='e1'>! RC3-BASEMAPS</div>
            <div className='e2'>CONQUEST LARGE - LANCANG DAM - CUSTOM - 60HZ</div>
            <div className='e3' >Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d</div>
            <div className='e4'>
                <div>JOIN</div>
                <div>SPECTATE</div>
                <div>JOIN AS COMMANDER</div>
                <div>13672</div>
            </div>
            <div className="e5">
                <div>
                    <div className='upper'>PLAYERS</div>
                    <div className='lower'>60/64</div>
                </div>
                <div>
                    <div className='upper'>PING</div>
                    <div className='lower'>104ms</div>
                </div>
                <div>
                    <div className='upper'>TICKRATE</div>
                    <div className='lower'>60 Hz</div>
                </div>


            </div>
        </div>

    )
}

const BottomMap = ({ mapsDat }) => {
    if (!Array.isArray(mapsDat)) return

    return (

        <>

            <div className='server__settings-h'>MAP ROTATION</div>
            <div className='grid'>

                {mapsDat.map(({ title, image }, index) => {
                    return <div key={index} className="grid-item">
                        <div className='grid-img'>
                            <img src={image}></img>
                        </div>
                        <div className='server__settings-text' style={{ marginTop: '2vh' }}>{title.substr(0, 14)}</div>
                        <div className='server__settings-text'>{title.slice(14)}</div>
                    </div>
                })}


            </div >
        </>
    )
}

export const BattlePage = () => {
    const [settings, setSettings] = useState({})
    const [advanced, setAdvanced] = useState({})
    const [rules, setRules] = useState({})
    const [maps, setMaps] = useState({})


    useEffect(() => {
        async function fetch() {
            const setting = await Fetch('settings')
            const advance = await Fetch('advanced')
            const rule = await Fetch('rules')
            const mapData = await Fetch('mapData')
            setSettings(setting)
            setAdvanced(advance)
            setRules(rule)
            setMaps(mapData)
        }
        fetch()

    }, [])



    return (
        <>
            <LeftMenu />
            <NavBar />
            <div className="scrollContent">
                <Top />
                <div className='lists'>
                    <List title='SETTINGS' list={settings} />
                    <List title='ADVANCED' list={advanced} />
                    <List title='RULES' list={rules} />
                </div>
                <BottomMap mapsDat={maps} />
            </div>
            <RightMenu />
        </>

    )
}
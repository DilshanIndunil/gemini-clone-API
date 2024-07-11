import './SideBar.css';
import { assets } from '../../assets/assets';
import { useContext, useState } from 'react';
import { Context } from '../../Context/Context';

export default function Sidebar() {
    const [extended, setExtended] = useState(false);
    const { onSent, prePrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt); // Ensure the onSent function is awaited
    };

    return (
        <div className="sidebar">
            <div className="top">
                <img
                    onClick={() => setExtended(prev => !prev)}
                    className='menu'
                    src={assets.menu_icon}
                    alt="Menu Icon"
                />
                <div className="new-chat" onClick={newChat}>
                    <img src={assets.plus_icon} alt="Plus Icon" />
                    {extended && <p>New Chat</p>}
                </div>
                {extended && (
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        {prePrompts.map((item, index) => (
                            <div key={index} className="recent-entry" onClick={() => loadPrompt(item)}>
                                <img src={assets.message_icon} alt="Message Icon" />
                                <p>{item.slice(0, 18)} ...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Question Icon" />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="History Icon" />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Setting Icon" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
}

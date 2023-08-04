import React, { useState } from 'react'
const emojiData =[
    {
        id:1,
        symbol:"😂",
        name:"laugh"
    },
    {
        id:2,
        symbol:"😜",
        name:"wrinking face with tongue"
    },
    {
        id:3,
        symbol:"😘",
        name:"face blowing with kiss"
    },
    {
        id:4,
        symbol:"😎",
        name:"smiling face with sunglasses"
        
    },
    {
        id:5,
        symbol:"😆",
        name:"grinning senquating face"
    },
    {
        id:6,
        symbol:"😡",
        name:"angry"
    },
    {
        id:7,
        symbol:"😨",
        name:"fearful face"
    },
    {
        id:8,
        symbol:"😫",
        name:"tired face"
    }
]
function EmojiSearch() {
   const [searchEmoji,setSearchEmoji]= useState("");
    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji=emojiData.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase());
    });
  return (
    <div>
        <h1>React Emoji App!!!</h1>
        <input type='text' placeholder='search for the emoji......'value={searchEmoji} onChange={handleChange} />
        <div>
           { showEmoji.map((emoji)=> emoji.symbol)}
        </div>
    </div>
  )
}

export default EmojiSearch
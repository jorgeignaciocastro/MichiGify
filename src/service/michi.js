export const GetMichi = async (isGif) => {
    const data = await fetch(`https://cataas.com/cat${isGif ? '/gif' : ''}?json=true`);
    const value = await data.json();
    return `https://cataas.com${value.url}`;
};

export const GetMichiText = async (text, isGif) => {
    const data =  await fetch(`https://cataas.com/cat/says/${text}?json=true`);
    const value = await data.json();
    return `https://cataas.com${value.url}`;
}

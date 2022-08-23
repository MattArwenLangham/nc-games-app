const ReviewCard = ({info}) => {
    const { review_id, created_at, category, title, owner, review_img_url, review_body, votes } = info;
    
    let reviewPreview = review_body.search(/\.|!|\?/);
    if(reviewPreview > 120) reviewPreview = review_body.indexOf(" ", 120);

    const postDate = new Date(created_at).toLocaleDateString("en-UK")
    return <div className="review-card" style={{"--img": `url(${review_img_url})`}}> 
        <h1>{title}</h1>
        <p>By: {owner}</p>
        <p>{postDate}</p>
        <p className="review-body-preview">{review_body.slice(0, reviewPreview || 10)}...</p>
        <p className="category-text">Category: {category}</p>
        
    </div>
}

export default ReviewCard

// category: "hidden-roles"
// comment_count: "0"
// created_at: "2021-02-05T11:27:26.563Z"
// designer: "Don Keigh"
// owner: "cooljmessy"
// review_body: "Nostrud anim cupidatat incididunt officia cupidatat magna. Cillum commodo voluptate laboris id incididunt esse elit ipsum consectetur non elit elit magna. Aliquip sint amet eiusmod magna. Fugiat non ut ex eiusmod elit. Esse anim irure laborum aute ut ad reprehenderit. Veniam laboris dolore mollit mollit in. Cillum in aliquip adipisicing ipsum et dolor veniam qui ut ullamco aliquip in. Dolor fugiat elit laborum elit cupidatat aute qui nostrud. Duis incididunt ea nostrud minim consequat. Reprehenderit mollit cupidatat do culpa aliqua culpa mollit minim eiusmod. Deserunt occaecat ipsum ex ut pariatur eu veniam cillum nulla ex nostrud. Do nostrud amet duis proident nostrud eiusmod occaecat reprehenderit. Quis et cupidatat tempor qui dolor id veniam in sunt ipsum eiusmod. Sint tempor commodo consectetur mollit proident culpa nulla est tempor ullamco tempor aliquip laboris."
// review_id: 14
// review_img_url: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg"
// title: "Velit tempor ullamco amet ipsum dolor voluptate."
// votes: 3
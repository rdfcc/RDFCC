export function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }
  
  export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-UK', {
      timeZone: "UTC",
    })
  }
  
  
  
  export function formatBlogPosts(posts, {
    filterOutDrafts = true,
    filterOutFuturePosts = true,
    filterFrontPage = false,
    sortByDate = true,
    limit = undefined,
  } = {}) {
  
    const filteredPosts = posts.reduce((acc, post) => {
      const { pubDate, draft } = post.frontmatter;
      // filterOutDrafts if true
      if (filterOutDrafts && draft) return acc;
  
      // filterOutFuturePosts if true
      if (filterOutFuturePosts && new Date(pubDate) > new Date()) return acc;
  
      
      // add post to acc
      acc.push(post)
  
      return acc;
    }, [])
  
    // sortByDate or randomize
    if (sortByDate) {
      filteredPosts.sort((a, b) => new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate))
    } else {
      filteredPosts.sort(() => Math.random() - 0.5)
    }
  
    // limit if number is passed
    if (typeof limit === "number") {
      return filteredPosts.slice(0, limit);
    }
    return filteredPosts;
  
  }

  export function formatFrontPage(posts, {
    filterFrontPage = false,
  } = {}) {
  
    const filteredPosts = posts.reduce((acc, post) => {
      const { frontpage } = post.frontmatter;
      // filterOutDrafts if true
      if (filterFrontPage && frontpage) { acc.push(post)} else {return acc;};
  
     
      return acc;
    }, [])
  
    filteredPosts.sort((a, b) => new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate))
    
    return filteredPosts;
  
  }

  export function sortRides(rides)
  {

    rides.sort((a,b) => new Date(b.frontmatter.Date) - new Date(a.frontmatter.Date))

    return rides;
  }
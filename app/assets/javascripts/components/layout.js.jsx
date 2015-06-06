var Layout = React.createClass({
  getInitialState: function() {
    return {
      heroPost: this.props.heroPost
    };
  },

  render: function() {
    if (this.state.heroPost) {
      heroPost = <HeroPost heroPost={this.state.heroPost} />
      $('body').addClass('no-scroll')
    } else {
      $('body').removeClass('no-scroll')
      heroPost = ''
    }

    heroPostClasses = React.addons.classSet({
      'hero-post-modal': true,
      'is-active': this.state.heroPost == null ? false : true
    })

    return(
      <div className='layout-container'>
        {this.props.influencers.map(function (influencer) {
          return(<Post influencer={influencer} parentComponent={this} />)
        }, this)}
        <div className={heroPostClasses} onClick={this.removeHeroPostState}>
          <div className="hero-post-container">
            {heroPost}
          </div>
        </div>
      </div>
    )
  },

  handleHeroPostDisplay: function(post) {
    this.setState({
      heroPost: post
    })
    console.log(post)

    urlPath = '/i/' + post.twitter_id
    pageTitle = post.name + 'on Freshest'
    window.history.pushState('', pageTitle, urlPath)
  },

  removeHeroPostState: function(post) {
    this.setState({
      heroPost: null
    })
    window.history.pushState('', "Freshest", '/')

  }
})
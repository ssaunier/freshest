var Post = React.createClass({
  render: function() {
    var influencer = this.props.influencer

    return (
      <div className="post-container">
        <div className="container">
          <div className="post" onClick={this.displayPost}>
            <div className='col-xs-11'>
              <ul className="list-unstyled list-inline influencer-infos">
                <li>
                  {influencer.name}
                </li>
                <li className="font-light color-light small">
                  {timeSince(new Date(influencer.last_post_at))} ago
                </li>
              </ul>
              <div className="post-content">
                <a href={influencer.article_url} target='_blank' className='link-title'>
                  <h4>
                    {influencer.title}
                  </h4>
                </a>
                <p>
                  {influencer.description}
                </p>
              </div>
            </div>
            <div className="col-xs-1 post-avatar p20 kill-pr">
              <img src={influencer.avatar_url} className="img total-width shadowed border-radius-2 hidden-xs" />
            </div>
            <div className='clear' />
          </div>
        </div>
      </div>
    )
  },
  updateUrl: function(twitterId, name) {

  },

  displayPost: function() {
    this.props.parentComponent.handleHeroPostDisplay(this.props.influencer)

  }


})

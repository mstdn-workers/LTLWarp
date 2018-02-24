const Mastodon = require('mastodon-api')

const instance_config = require('./mastodon_instance_config')

const M = new Mastodon(instance_config)

module.exports = M

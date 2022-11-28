module.exports.resetPassword = function(req, res){
    return res.render('reset_password', {
        title: 'Reset Password'
    })
}
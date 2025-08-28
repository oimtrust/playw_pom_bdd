export const AuthData = {
   STANDARD_USER: {
       username: 'standard_user',
   },
   LOCKED_OUT_USER: {
       username: 'locked_out_user',
   },
   PROBLEM_USER: {
       username: 'problem_user',
   },
   PERFORMANCE_GLITCH_USER: {
       username: 'performance_glitch_user',
   },
   ERROR_USER: {
       username: 'invalid_user',
   },
   VISUAL_USER: {
       username: 'visual_user',
   },
   PASSWORD: {
       password: 'secret_sauce',
   }
}

export const Messages = {
   LOGIN_ERROR: 'Epic sadface: Username and password do not match any user in this service',
   PASSWORD_REQUIRED_ERROR: 'Epic sadface: Password is required',
   USERNAME_REQUIRED_ERROR: 'Epic sadface: Username is required',
   LOCKED_OUT_ERROR: 'Epic sadface: Sorry, this user has been locked out.',
   PROBLEM_USER_ERROR: 'Epic sadface: Sorry, this user is not allowed to log in.',
   PERFORMANCE_GLITCH_ERROR: 'Epic sadface: Well, this is embarrassing. Something went wrong.',
   VISUAL_USER_ERROR: 'Epic sadface: Username and password do not match any user in this service'
}

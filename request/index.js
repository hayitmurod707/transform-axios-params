import deleteData from "./deleteData";
import getData from "./getData";
import postData from "./postData";
import putData from "./putData";
export default { getData, postData, deleteData, putData };

// HTTP STATUS CODES

// 100-199 Information responses
//    100 - Continue
//    101 - Switching protocols
//    102 - Processing
// 200-299 Successful responses
//    200 - Ok
//    201 - Created
//    202 - Accepted
//    203 - Non Authoritative Information
//    204 - No Content
//    205 - Reset Content
//    206 - Partial Content
// 300-399 Redirects
//    300 - Multiple Choices
//    301 - Moved Permanently
//    302 - Found
//    303 - See Other
//    304 - Not Modified
//    305 - Use Proxy
//    306 - Switch Proxy
//    307 - Temporary Redirect
//    308 - Resume Incomplete
// 400-499 Client errors
//    400 - Bad Request
//    401 - Unauthorized
//    402 - Payment Required
//    403 - Forbidden
//    404 - Not Found
//    405 - Method Not Allowed
//    406 - Not Acceptable
//    407 - Proxy Authentication Required
//    408 - Request Timeout
//    409 - Conflict
//    410 - Gone
//    411 - Length Required
//    412 - Precondition Failed
//    413 - Request Entity Too Large
//    414 - Request-URI Too Long
//    415 - Unsupported Media Type
//    416 - Requested Range Not Satisfiable
//    417 - Expectation Failed
// 500-599 Server errors
//    500 - Internal Server Error
//    501 - Not Implemented
//    502 - Bad Gateway
//    503 - Service Unavailable
//    504 - Gateway Timeout
//    505 - HTTP Version Not Supported
//    507 - Insufficient Storage
//    508 - Loop Detected
//    511 - Network Authentication Required

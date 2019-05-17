
export const setCurrentPage = (currentPageId) =>dispatch => {
    dispatch({
        type:'SET_CURRENT_PAGE',
        payload:currentPageId
    })

}
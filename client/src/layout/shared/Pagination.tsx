import {FC, useEffect, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {PaginationButtonType, PaginationPropsType, PaginationStateType} from "../../types/shared.types";

export const Pagination: FC<PaginationPropsType> = props => {
  const initialState: PaginationStateType = {
    activePage: 1,
    numberOfPages: Math.floor((props.items.length + props.itemsPerPage - 1) / props.itemsPerPage),
    visibleButtons: []
  }
  const [state, setState] = useState(initialState);

  const generateVisibleButtons = (page: number): PaginationButtonType[] => {
    let visibleButtons: PaginationButtonType[] = [];
    visibleButtons.push({name: '1', number: 1});
    if (Math.min(page, Math.ceil(state.numberOfPages / 2)) - Math.floor(props.numberOfButtons / 2) - 1 > 1 && state.numberOfPages > props.numberOfButtons + 2) {
      visibleButtons.push({name: '...'})
    }
    const from = Math.max(2, Math.min(state.numberOfPages - props.numberOfButtons, page - Math.floor(props.numberOfButtons / 2)));
    const to = Math.min(Math.max(props.numberOfButtons + 1, page + Math.floor(props.numberOfButtons / 2)), state.numberOfPages - 1);
    for (let i = from; i <= to; i++) {
      visibleButtons.push({name: `${i}`, number: i})
    }
    if (Math.max(page, Math.ceil(state.numberOfPages / 2)) + Math.floor(props.numberOfButtons / 2) + 1 < state.numberOfPages && state.numberOfPages > props.numberOfButtons + 2) {
      visibleButtons.push({name: '...'})
    }
    if (state.numberOfPages > 1)
      visibleButtons.push({name: `${state.numberOfPages}`, number: state.numberOfPages});

    return visibleButtons;
  }

  useEffect(() => {
    setState({
      ...state,
      visibleButtons: generateVisibleButtons(state.activePage)
    })
  }, [state.numberOfPages])

  useEffect(() => {
    setActivePage(1)
  }, [props.items])

  const setActivePage = (page: number) => {
    if (!page)
      return;

    props.updatePage(page, props.items.slice(props.itemsPerPage * (page - 1), Math.min(props.items.length, props.itemsPerPage * page)));
    setState({
      ...state,
      activePage: page,
      numberOfPages: Math.floor((props.items.length + props.itemsPerPage - 1) / props.itemsPerPage),
      visibleButtons: generateVisibleButtons(page)
    })
  }

  return (
    <div className={"pagination"}>
      <div className={"button-list"}>
        {
          state.visibleButtons?.map(button => (
            <span key={uuidv4()}
                  className={`${button.name === '...' ? `dots` : ``}${button.number === state.activePage ? ` active` : ``}`}
                  onClick={() => {
                    if (button.number) {
                      setActivePage(button.number)
                    }
                  }}>
              {button.name}
            </span>
          ))
        }
      </div>
    </div>
  )
}
import React from 'react'
import ReactDOM from 'react-dom'
import Select from './Select';

import './list_select.css';


import MainPanelIcon from '../../static/icons/text.svg';
import BooksCatalogIcon from '../../static/icons/book.svg';
import ReadersIcon from '../../static/icons/man.svg';
import JournalIcon from '../../static/icons/history.svg';
import DeskIcon from '../../static/icons/edit.svg';
import SettingIcon from '../../static/icons/settings.svg';

class ListSelect extends React.Component {
  render () {
    return <div className='linked-list'>
        <div className='wrapper'>
            <Select name='Главная панель' image={MainPanelIcon}/>
            <Select name='Каталог книг' image={BooksCatalogIcon}/>
            <Select name='Читатели' image={ReadersIcon}/>
            <Select name='Журнал' image={JournalIcon}/>
            <Select name='Доски' image={DeskIcon}/>
            <Select name='Настройки' image={SettingIcon}/>
        </div>
    </div>
  }
}

export default ListSelect;
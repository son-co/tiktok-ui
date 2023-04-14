import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d3acf07b978ba3ab31c5093f446ae99b~c5_100x100.jpeg?x-expires=1681650000&x-signature=U%2FgWCM5SAABhy%2FAFmkqNQ351F8s%3D"
            alt="avt"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>Nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;

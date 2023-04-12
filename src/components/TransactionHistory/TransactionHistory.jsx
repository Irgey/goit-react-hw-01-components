import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    console.log(items);
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{items.map(({type,amount,currency,id}) => {
return (<tr key={ id}>
                    <td>{ type}</td>
                    <td>{ amount}</td>
                    <td>{ currency}</td>
    </tr>)}) }   
  </tbody>
</table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        id: PropTypes.string}
    ))
}
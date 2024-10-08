import PropTypes from 'prop-types'

ConRend.propTypes = {
  condition: PropTypes.any,
  value: PropTypes.any
}

export default function ConRend({ condition, value }) {
  if (condition)
    return (
      <div className="mt-4 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Conditional rendering</h3>
        <p className="text-3xl font-bold text-gray-800">{value}</p>
      </div>
    )
  return <div> give me a change ! </div>
}
{users.length !== null &&
    users.map(user => (
      <h3>
        <ShowImage imagelocation={user.avatar_url} />
      </h3>
    ))}